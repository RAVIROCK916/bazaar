import db from "@/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const POST = async (req: Request) => {
  const sessionID = cookies().get("sessionID");
  console.log(sessionID?.value);

  if (sessionID?.value) {
    cookies().delete("sessionID");
    await db.query("DELETE FROM session_ids WHERE id = $1", [sessionID.value]);
  }

  // NextResponse.redirect("/login");

  return new Response("Logged out successfully", { status: 200 });
};
