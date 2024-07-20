import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import pool from "../../../../db";

export async function GET(req: Request) {
  return new NextResponse("GET call returned!");
}

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const numberOfUsers = await pool.query(
    `SELECT COUNT(*) FROM users WHERE name = '${email}';`,
  );
  if (numberOfUsers.rows[0].count > 0) {
    return new NextResponse("User already exists", {
      status: 400,
    });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  await pool.query(
    `INSERT INTO users VALUES ('${email}', '${hashedPassword}');`,
  );
  return new NextResponse("User created successfully!");
}
