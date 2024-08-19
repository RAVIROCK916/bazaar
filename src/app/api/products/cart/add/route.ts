import { NextRequest, NextResponse } from "next/server";
import db from "@/db";
import getUserId from "@/app/api/utils/getUserId";

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity } = await req.json();
    const userId = await getUserId();

    const cartItem = await db.query(
      "SELECT * FROM CART WHERE user_id = $1 AND product_id = $2",
      [userId, productId],
    );
    if (cartItem.rows.length === 0) {
      await db.query(
        "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3)",
        [userId, productId, quantity],
      );
      return NextResponse.json(
        { message: "Item added to cart successfully" },
        { status: 200 },
      );
    }
    const quantityInCart = cartItem.rows[0].quantity;
    await db.query(
      "UPDATE cart SET quantity = $1 WHERE user_id = $2 AND product_id = $3",
      [quantityInCart + quantity, userId, productId],
    );

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
