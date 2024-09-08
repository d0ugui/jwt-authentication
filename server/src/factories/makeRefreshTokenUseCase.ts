import { RefreshTokenUseCase } from "../application/useCases/RefreshTokenUseCase";

export function makeRefreshTokenUseCase() {
  return new RefreshTokenUseCase();
}
