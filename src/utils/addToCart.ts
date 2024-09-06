import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export default async function addToCart(productId: number, quantity: number) {
  try {
    const response = await axios.post("/api/products/cart/add", {
      productId,
      quantity,
    });
    if (response.status === 200) {
      toast({
        title: "Cart",
        description: "Item added to cart successfully",
        variant: "success",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
