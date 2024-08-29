import { z } from "zod";
import { IController, IResponse } from "../interfaces/IController";
import { GetUserUseCase } from "../useCases/GetUserUseCase";
import { AccountNotFound } from "../errors/AccountNotFound";
import { IRequest } from "../interfaces/IRequest";

const schema = z.string();

export class GetUserController implements IController {
  constructor(private readonly getUserUseCase: GetUserUseCase) {}

  async handle({ account }: IRequest): Promise<IResponse> {
    try {
      const id = schema.parse(account?.id);

      const userAccount = await this.getUserUseCase.execute({ accountId: id });

      return {
        statusCode: 200,
        body: userAccount,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error instanceof AccountNotFound) {
        return {
          statusCode: 404,
          body: {
            error: "Account not found",
          },
        };
      }

      throw error;
    }
  }
}
