import { JwtPayload, sign, verify } from "jsonwebtoken";
import { env } from "../config/env";
import { InvalidCredentials } from "../errors/InvalidCredentials";

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

      return {
        accessToken,
        refreshToken: newRefreshToken,
      };
    } catch {
      throw new InvalidCredentials();
    }
  }
}
