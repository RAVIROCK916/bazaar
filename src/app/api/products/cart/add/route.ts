import { NextRequest, NextResponse } from "next/server";
import db from "@/db";

export async function POST(req: NextRequest) {
  try {
    const { userId, productId, quantity } = await req.json();

    const query =
      "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3)";
    await db.query(query, [userId, productId, quantity]);

    return NextResponse.json(
      { message: "Item added to cart successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 },
    );
  }
}
