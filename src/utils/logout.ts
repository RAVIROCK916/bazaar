import axios from "axios";
import { redirect, useRouter } from "next/navigation";

export default async function logout(Router: any) {
  await axios.post("/api/auth/logout");
  await Router.push("/login");
}
