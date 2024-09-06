import db from "@/db";
import { cookies } from "next/headers";

export default async function getAuthenticationStatus() {
  const sessionID = cookies().get("sessionID")?.value;
  if (!sessionID) {
    return false;
  }

  const sessions = await db.query("SELECT * FROM session_ids WHERE id = $1", [
    sessionID,
  ]);
  if (sessions?.rows?.length > 0) {
    return true;
  }

  return false;
}
