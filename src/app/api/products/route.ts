import db from "@/db";
import axios from "axios";
import { PRODUCTS_API_URL } from "../constants";

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

    const response = await axios.get(PRODUCTS_API_URL);
    const products = response.data;
    return Response.json(products);
  } catch (error: any) {
    return new Response("Something went wrong", { status: 500 });
  }
}
