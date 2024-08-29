import { Account } from "@prisma/client";
import { prismaClient } from "../libs/prismaClient";
import { AccountNotFound } from "../errors/AccountNotFound";

interface IInput {
  accountId: string;
}

export class GetUserUseCase {
  async execute({ accountId }: IInput): Promise<Omit<Account, "password">> {
    const account = await prismaClient.account.findUnique({
      where: { id: accountId },
    });

    if (!account) {
      throw new AccountNotFound();
    }

    return {
      email: account.email,
      name: account.name,
      id: account.id,
      role: account.role,
    };
  }
}
