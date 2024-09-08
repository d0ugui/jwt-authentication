import { RefreshTokenController } from "../application/controllers/RefreshTokenController";
import { makeRefreshTokenUseCase } from "./makeRefreshTokenUseCase";

export function makeRefreshTokenController() {
  const refreshTokenUseCase = makeRefreshTokenUseCase();
  return new RefreshTokenController(refreshTokenUseCase);
}
