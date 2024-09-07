import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import db from "./db";
import { PUBLIC_ROUTES } from "./app/api/constants/routes";
import getAuthenticationStatus from "./app/api/utils/getAuthenticationStatus";
import axios from "axios";

export async function middleware(request: NextRequest) {
  // const res = await fetch("http://localhost:3000/api/auth/me", {
  //   credentials: "include",
  // });
  // console.log(res.ok);

  // if (
  //   !(res.status === 200) &&
  //   !PUBLIC_ROUTES.includes(request.nextUrl.pathname)
  // ) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  const sessionID = request.cookies.get("sessionID")?.value;
  // if (!sessionID) {
  //   return NextResponse.redirect("/auth/login");
  // }

  // const session = await db.query("SELECT * FROM session_ids WHERE id = $1", [
  //   sessionID,
  // ]);
  // if (session.rows.length === 0) {
  //   return NextResponse.redirect("/auth/login");
  // }

  // request.headers.set("userID", session.rows[0].user_id);
  // console.log(request.headers.get("userID"));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
