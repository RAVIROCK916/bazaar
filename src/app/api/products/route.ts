import shopifyClient from "@/app/lib/shopifyClient";

export async function GET(request: Request) {
  try {
    const response = await shopifyClient.get("/products.json");
    const products = response.data.products.slice(0, 10);
    return Response.json(products);
  } catch (error: any) {
    return new Response("Something went wrong", { status: 500 });
  }
}
