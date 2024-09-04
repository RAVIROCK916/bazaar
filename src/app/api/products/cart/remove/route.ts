import getUserId from "@/app/api/utils/getUserId";
import db from "@/db";

export async function POST(req: Request) {
  try {
    const { productId } = await req.json();

    const userId = await getUserId();

    await db.query("DELETE FROM cart WHERE user_id=$1 AND product_id=$2", [
      userId,
      productId,
    ]);
    return Response.json(
      { message: "Item removed from cart successfully" },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { error: "Failed to remove cart items" },
      { status: 500 },
    );
  }
}
