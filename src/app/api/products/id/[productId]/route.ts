import db from "@/db";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    productId: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  try {
    const { productId } = context.params;

    const response = await db.query("SELECT * FROM products WHERE id = $1", [
      productId,
    ]);

    const product = response.rows[0];

    return NextResponse.json({ data: product });
  } catch (error: any) {
    return new Response("Something went wrong", { status: 500 });
  }
}
