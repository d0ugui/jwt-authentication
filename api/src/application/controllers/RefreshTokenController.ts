import { z } from "zod";
import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";
import { RefreshTokenUseCase } from "../useCases/RefreshTokenUseCase";
import { InvalidCredentials } from "../errors/InvalidCredentials";

const schema = z.object({
  refreshToken: z.string(),
});

export class RefreshTokenController implements IController {
  constructor(private readonly refreshTokenUseCase: RefreshTokenUseCase) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { refreshToken } = schema.parse(body);

      const { accessToken, refreshToken: newRefreshToken } =
        await this.refreshTokenUseCase.execute({
          refreshToken,
        });

      return {
        statusCode: 200,
        body: {
          accessToken,
          refreshToken: newRefreshToken,
        },
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error instanceof InvalidCredentials) {
        return {
          statusCode: 401,
          body: {
            error: "Invalid credentials",
          },
        };
      }

      throw error;
    }
  }
}
