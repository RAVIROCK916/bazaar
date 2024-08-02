import pool from "@/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookieString = req.headers.get("cookie");

  const cookie = cookieString
    ?.split(";")
    .reduce((acc: { [key: string]: string }, cookie: string) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, {});
  if (!cookie?.sessionID) {
    return new NextResponse("Unauthorized", {
      status: 401,
    });
  }

  const sessionID = cookie.sessionID;

  const query = "SELECT * FROM session_ids WHERE id = $1";
  const user = await pool.query(query, [sessionID]);

  if (user?.rows?.length === 0) {
    return new NextResponse("User not found", {
      status: 400,
    });
  }

  return new NextResponse("Signed in successfully");
}
