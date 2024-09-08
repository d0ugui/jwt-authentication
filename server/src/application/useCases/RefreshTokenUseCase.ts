import { JwtPayload, sign, verify } from "jsonwebtoken";
import { env } from "../config/env";
import { InvalidCredentials } from "../errors/InvalidCredentials";
import { prismaClient } from "../libs/prismaClient";

interface IInput {
  refreshToken: string;
}

interface IOutput {
  accessToken: string;
  refreshToken: string;
}

export class RefreshTokenUseCase {
  async execute({ refreshToken }: IInput): Promise<IOutput> {
    try {
      const payload = verify(refreshToken, env.refreshSecret) as JwtPayload;

      if (!payload.sub) {
        await prismaClient.refreshToken.deleteMany({
          where: { token: refreshToken },
        });

        throw new InvalidCredentials();
      }

      const refreshTokenAlreadyUser = await prismaClient.refreshToken.findFirst(
        {
          where: {
            token: refreshToken,
          },
        }
      );

      if (!refreshTokenAlreadyUser) {
        // This is a good practice to avoid token enumeration
        await prismaClient.refreshToken.deleteMany({
          where: { accountId: payload.sub },
        });

        throw new InvalidCredentials();
      }

      const accessToken = sign(
        { sub: payload.sub, role: payload.role },
        env.jwtSecret,
        {
          expiresIn: "1h",
        }
      );

      const newRefreshToken = sign(
        { sub: payload.sub, role: payload.role },
        env.refreshSecret,
        { expiresIn: "4h" }
      );

      await Promise.all([
        prismaClient.refreshToken.deleteMany({
          where: { token: refreshToken },
        }),
        prismaClient.refreshToken.create({
          data: {
            accountId: payload.sub,
            token: newRefreshToken,
          },
        }),
      ]);

      return {
        accessToken,
        refreshToken: newRefreshToken,
      };
    } catch {
      throw new InvalidCredentials();
    }
  }
}
