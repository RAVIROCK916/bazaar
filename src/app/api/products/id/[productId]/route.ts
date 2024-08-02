import shopifyClient from "@/app/lib/shopifyClient";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    productId: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  try {
    const { productId } = context.params;
    console.log(productId);

    const response = await shopifyClient.get(`/products/${productId}.json`);
    console.log(response.data);

    const product = response.data;
    return NextResponse.json({ data: product });
  } catch (error: any) {
    return new Response("Something went wrong", { status: 500 });
  }
}
