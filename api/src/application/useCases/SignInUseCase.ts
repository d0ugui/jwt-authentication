import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../libs/prismaClient";
import { InvalidCredentials } from "../errors/InvalidCredentials";
import { env } from "../config/env";

interface IInput {
  email: string;
  password: string;
}
interface IOutput {
  accessToken: string;
  refreshToken: string;
}

export class SignInUseCase {
  async execute({ email, password }: IInput): Promise<IOutput> {
    const account = await prismaClient.account.findUnique({
      where: { email },
    });

    if (!account) {
      throw new InvalidCredentials();
    }

    const isPasswordValid = await compare(password, account.password);

    if (!isPasswordValid) {
      throw new InvalidCredentials();
    }

    const accessToken = sign(
      { sub: account.id, role: account.role },
      env.jwtSecret,
      { expiresIn: "10s" }
    );

    const refreshToken = sign(
      { sub: account.id, role: account.role },
      env.refreshSecret,
      { expiresIn: "1h" }
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}
