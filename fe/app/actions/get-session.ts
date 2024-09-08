import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;

  return verify(session, process.env.JWT_SECRET);
}
