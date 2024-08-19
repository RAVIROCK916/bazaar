import db from "@/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const sessionID = cookies().get("sessionID")?.value;

  if (!sessionID) {
    return new NextResponse("Unauthorized", {
      status: 401,
    });
  }

  try {
    const query = "SELECT * FROM session_ids WHERE id = $1";
    const user = await db.query(query, [sessionID]);

    if (user?.rows?.length === 0) {
      return new NextResponse("User not found", {
        status: 400,
      });
    }
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }

  return new NextResponse("Signed in successfully");
}
