"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa6";

const page = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = form;

  const router = useRouter();

  const postCredentials = async () => {
    const respone = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (respone.status === 200) {
      router.push("/");
    }
  };
  return (
    <>
      <h2>Sign Up</h2>
      <form
        className="flex w-[420px] flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          postCredentials();
        }}
      >
        <div className="space-y-2">
          <label htmlFor="name">Name*</label>
          <Input
            type="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
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
            Sign up
          </Button>
          <Button intent="outline">
            <FaGoogle />
            <span>Sign up with Google</span>
          </Button>
        </div>
        <div className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-200 underline">
            Log In
          </Link>
        </div>
      </form>
    </>
  );
};
export default page;
