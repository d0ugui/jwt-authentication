import { IUser } from "@/entities/IUser";
import { httpClient } from "./httpClient";
import { storageKeys } from "@/config/storageKeys";

export class UserService {
  static async getUser() {
    const accessToken = localStorage.getItem(storageKeys.accessToken);

    const { data } = await httpClient.get<IUser>("/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }
}
