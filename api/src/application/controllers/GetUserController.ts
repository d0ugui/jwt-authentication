import { z } from "zod";
import { IController, IRequest, IResponse } from "../interfaces/IController";
import { GetUserUseCase } from "../useCases/GetUserUseCase";
import { AccountNotFound } from "../errors/AccountNotFound";

const schema = z.string();

export class GetUserController implements IController {
  constructor(private readonly getUserUseCase: GetUserUseCase) {}

  async handle({ accountId }: IRequest): Promise<IResponse> {
    try {
      const id = schema.parse(accountId);

      const account = await this.getUserUseCase.execute({ accountId: id });

      return {
        statusCode: 200,
        body: account,
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
