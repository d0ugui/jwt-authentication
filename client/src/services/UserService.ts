import { IUser } from "@/entities/IUser";
import { httpClient } from "./httpClient";

export class UserService {
  static async getUser() {
    const { data } = await httpClient.get<IUser>("/me");

    return data;
  }
}
