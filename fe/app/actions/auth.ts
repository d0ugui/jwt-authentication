import { cookies } from "next/headers";
import { JwtPayload, verify } from "jsonwebtoken";
import { client } from "@/lib/client";
import { redirect } from "next/navigation";
import { fromUnixTime } from "date-fns";

export async function login(formData: FormData) {
  const response = await client.post("/sign-in", {
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const { accessToken } = response.data;

  const payload = verify(accessToken, process.env.JWT_SECRET) as JwtPayload;

  if (!response || !payload.exp) {
    throw new Error("Invalid credentials");
  }

  cookies().set({
    name: "session",
    value: accessToken,
    httpOnly: true,
    expires: fromUnixTime(payload.exp),
  });

  redirect("/dashboard");
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return verify(session, process.env.JWT_SECRET);
}
