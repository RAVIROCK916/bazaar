import db from "@/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default async function getUserId() {
  const sessionID = cookies().get("sessionID")?.value;
  if (!sessionID) {
    return NextResponse.json(
      { message: "User not logged in" },
      { status: 401 },
    );
  }
  const userId = await db.query(
    "SELECT user_id FROM session_ids WHERE id = $1",
    [sessionID],
  );

  return userId.rows[0].user_id;
}
