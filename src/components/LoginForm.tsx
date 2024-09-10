"use client";

import { useState } from "react";

import { toast } from "@/components/ui/use-toast";
import { CheckCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "./Input";
import { Button } from "./Button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;

  const router = useRouter();

  const postCredentials = async () => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
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
      location.reload();
      toast({
        title: "Login",
        description: "You have successfully logged in!",
        variant: "success",
      });
    }
  };

  return (
    <form
      className="flex w-80 flex-col gap-6 sm:w-[420px]"
      onSubmit={(e) => {
        e.preventDefault();
        postCredentials();
      }}
    >
      <div className="space-y-2">
        <label htmlFor="email">Email*</label>
        <Input
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password">Password*</label>
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
  );
};
export default LoginForm;
