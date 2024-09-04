import db from "@/db";
import getUserId from "../../utils/getUserId";
import ProductType from "@/types/ProductType";

export async function GET(request: Request) {
  const userId = await getUserId();

  try {
    const cartItems = await db.query("SELECT * FROM cart WHERE user_id = $1", [
      userId,
    ]);
    let cart: { product: ProductType; quantity: number }[] = [];
    for (let i = 0; i < cartItems.rows.length; i++) {
      const item = cartItems.rows[i];
      const product = await db.query("SELECT * FROM products WHERE id = $1", [
        item.product_id,
      ]);
      cart.push({ product: product.rows[0], quantity: item.quantity });
    }

    return Response.json(cart);
  } catch (error) {
    console.log(error);
  }
  return new Response("Something went wrong", { status: 500 });
}
