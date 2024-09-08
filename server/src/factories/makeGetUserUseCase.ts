import { GetUserUseCase } from "../application/useCases/GetUserUseCase";

export function makeGetUserUseCase() {
  return new GetUserUseCase();
}
