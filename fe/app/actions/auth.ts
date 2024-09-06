import { cookies } from "next/headers";
import { JwtPayload, verify } from "jsonwebtoken";
import { client } from "@/lib/client";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const response = await client.post("/sign-in", {
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const { accessToken } = response.data;

  const payload = verify(accessToken, process.env.JWT_SECRET) as JwtPayload;

  if (!response || !payload.exp) {
    console.log("error");
    throw new Error("Invalid credentials");
  }

  const expires = new Date(Date.now() + 10 * 1000);

  cookies().set({
    name: "session",
    value: accessToken,
    httpOnly: true,
    expires: expires,
  });

  redirect("/dashboard");
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return verify(session, process.env.JWT_SECRET);
}
