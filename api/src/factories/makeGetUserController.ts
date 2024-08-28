import { GetUserController } from "../application/controllers/GetUserController";
import { makeGetUserUseCase } from "./makeGetUserUseCase";

export function makeGetUserController() {
  const getUserUseCase = makeGetUserUseCase();

  return new GetUserController(getUserUseCase);
}
