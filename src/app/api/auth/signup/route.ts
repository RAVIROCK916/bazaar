import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "../../../../db";
import createSessionCookie from "../../utils/createSessionCookie";

export async function GET(req: Request) {
  return new NextResponse("GET call returned!");
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const numberOfUsers = await db.query(
      `SELECT COUNT(*) FROM users WHERE name = '${email}';`,
    );
    if (numberOfUsers.rows[0].count > 0) {
      return new NextResponse("User already exists", {
        status: 400,
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await db.query(
      `INSERT INTO users VALUES ('${crypto.randomUUID()}', '${email}', '${hashedPassword}') RETURNING *;`,
    );

    createSessionCookie(user);

    return new NextResponse("User created successfully!");
  } catch (error) {
    console.log(error);

    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
