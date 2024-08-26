import { PRODUCTS_API_URL } from "@/app/api/constants";
import db from "@/db";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    productId: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  try {
    const { productId } = context.params;

    const response = await axios.get(`${PRODUCTS_API_URL}/${productId}`);

    const product = response.data;

    return NextResponse.json(product);
  } catch (error: any) {
    return new Response("Something went wrong", { status: 500 });
  }
}
