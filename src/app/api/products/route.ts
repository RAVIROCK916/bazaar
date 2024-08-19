import db from "@/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("search");

    if (searchQuery) {
      const products = await db.query(
        "SELECT * FROM products WHERE name ILIKE $1",
        ["%" + searchQuery + "%"],
      );

      return new Response(JSON.stringify(products.rows));
    }

    const response = await db.query("SELECT * FROM products");
    const products = response.rows.slice(0, 10);
    return Response.json(products);
  } catch (error: any) {
    return new Response("Something went wrong", { status: 500 });
  }
}
