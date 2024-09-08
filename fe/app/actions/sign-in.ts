import { cookies } from "next/headers";
import { client } from "@/lib/client";
import { redirect } from "next/navigation";
import { fromUnixTime } from "date-fns";
import { JwtPayload, verify } from "jsonwebtoken";

export async function signin(formData: FormData) {
  const response = await client.post("/sign-in", {
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const { accessToken, refreshToken } = response.data;

  const accessPayload = verify(
    accessToken,
    process.env.JWT_SECRET
  ) as JwtPayload;
  const refreshPayload = verify(
    refreshToken,
    process.env.REFRESH_SECRET
  ) as JwtPayload;

  if (!response || !accessPayload.exp || !refreshPayload.exp) {
    throw new Error("Invalid credentials");
  }

  // set access-token cookie
  cookies().set({
    name: "session",
    value: accessToken,
    httpOnly: true,
    expires: fromUnixTime(accessPayload.exp),
  });

  // set refresh-token cookie
  cookies().set({
    name: "refreshToken",
    value: refreshToken,
    httpOnly: true,
    expires: fromUnixTime(refreshPayload.exp),
  });

  redirect("/dashboard");
}
