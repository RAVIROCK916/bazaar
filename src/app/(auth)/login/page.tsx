"use client";
import ROUTE from "@/app/api/constants/routes";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { toast } from "@/components/ui/use-toast";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa6";

const Page = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;

  const router = useRouter();

  const postCredentials = async () => {
    const response = await fetch(`${ROUTE}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      router.push("/");
      toast({
        title: "Login",
        description: "You have successfully logged in!",
        variant: "success",
      });
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form
        className="flex w-full flex-col gap-6 sm:w-[420px]"
        onSubmit={(e) => {
          e.preventDefault();
          postCredentials();
        }}
      >
        <div className="space-y-2">
          <label htmlFor="email" className="font-medium">
            Email*
          </label>
          <Input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="font-medium">
            Password*
          </label>
          <Input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div className="space-y-4 *:w-full">
          <Button type="submit" className="text-center">
            Login
          </Button>
          <Button intent="outline">
            <FaGoogle />
            <span>Log in with Google</span>
          </Button>
        </div>
        <div className="text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary-200 underline">
            Sign up
          </Link>
        </div>
      </form>
    </>
  );
};
export default Page;
