import db from "@/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import createSessionCookie from "../../utils/createSessionCookie";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const query = "SELECT * FROM users WHERE name = $1";
  const user = await db.query(query, [email]);

  if (user?.rows?.length === 0) {
    return new NextResponse("User not found", {
      status: 400,
    });
  }

  const passwordCorrect = bcrypt.compareSync(
    password,
    user?.rows?.[0].password,
  );
  if (!passwordCorrect) {
    return new NextResponse("Incorrect password", {
      status: 400,
    });
  }

  createSessionCookie(user);

  return new NextResponse("login successful!");
}
