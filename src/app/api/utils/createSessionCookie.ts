import db from "@/db";
import { cookies } from "next/headers";

type User = {
  rows: {
    id: number;
    name: string;
    email: string;
    password: string;
  }[];
};

export default function createSessionCookie(user: User) {
  const sessionID = crypto.randomUUID();
  db.query("INSERT INTO session_ids VALUES ($1, $2)", [
    sessionID,
    user.rows[0].id,
  ]);

  cookies().set("sessionID", sessionID, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 1,
  });
}
