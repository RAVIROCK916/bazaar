"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { toast } from "@/components/ui/use-toast";
import { FaGoogle } from "react-icons/fa6";
import { CircleDashed } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

type FormFields = z.infer<typeof formSchema>;

const page = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const { name, email, password } = getValues();

      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        JSON.stringify({ email, password }),
      );

      if (response.status === 200) {
        axios.post("/api/emails", JSON.stringify({ name, email }));
        toast({
          title: "You have successfully signed up!",
          variant: "success",
        });
        router.push("/");
      }
    } catch (error) {
      setError("root", { message: "Something went wrong" });
    }
  };
  return (
    <>
      <h2>Sign Up</h2>
      <form
        className="flex w-[420px] flex-col gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative space-y-2">
          <label htmlFor="name">Name</label>
          <Input type="name" id="name" {...register("name")} />
          {errors.name?.message && (
            <span className="absolute -bottom-6 text-sm text-destructive">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="relative space-y-2">
          <label htmlFor="email">Email*</label>
          <Input type="email" id="email" {...register("email")} />
          {errors.email && (
            <span className="absolute -bottom-6 text-sm text-destructive">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="relative space-y-2">
          <label htmlFor="password">Password*</label>
          <Input type="password" id="password" {...register("password")} />
          {errors.password && (
            <span className="absolute -bottom-6 text-sm text-destructive">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="space-y-4 *:w-full">
          {errors.root?.message && (
            <span className="text-sm text-destructive">
              {errors.root.message}
            </span>
          )}
          <Button type="submit" className="text-center" disabled={isSubmitting}>
            Sign Up
            {isSubmitting && (
              <CircleDashed className="duration-[5000] animate-spin" />
            )}
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
