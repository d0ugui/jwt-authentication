import { httpClient } from "./httpClient";

interface ISignUpDTO {
  name: string;
  email: string;
  password: string;
}

interface ISignInResponse {
  accessToken: string;
  refreshToken: string;
}

export class AuthService {
  static async signUp({ name, email, password }: ISignUpDTO) {
    const { data } = await httpClient.post("/sign-up", {
      name,
      email,
      password,
    });

    return data;
  }

  static async signIn({ email, password }: Omit<ISignUpDTO, "name">) {
    const { data } = await httpClient.post<ISignInResponse>("/sign-in", {
      email,
      password,
    });

    return data;
  }

  static async refreshToken(refreshToken: string) {
    const { data } = await httpClient.post<ISignInResponse>("/refresh", {
      refreshToken,
    });

    return data;
  }
}
