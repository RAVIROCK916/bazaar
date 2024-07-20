import pool from "@/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const query = "SELECT * FROM users WHERE name = $1";
  const user = await pool.query(query, [email]);

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

  const sessionID = crypto.randomUUID();
  pool.query("INSERT INTO session_ids VALUES ($1, $2)", [
    sessionID,
    user.rows[0].id,
  ]);

  cookies().set("sessionID", sessionID, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 30,
  });

  return new NextResponse("login successful!");
}
