"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";

const InquirySection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="space-y-20 py-28">
      <div className="space-y-4 text-center">
        <p className="text-base font-semibold">Inquiry</p>
        <h2>Get in Touch</h2>
        <p>Have a question or need more information? Contact us!</p>
      </div>
      <form action="" className="mx-auto max-w-xl space-y-6">
        <div className="space-y-1">
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            value={form.name}
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            value={form.email}
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Enter your message"
            className="block max-h-96 min-h-44 w-full rounded border border-neutral-600 p-3"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" name="" id="terms" className="rounded-none" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <Button type="submit" className="mx-auto">
          Submit
        </Button>
      </form>
    </section>
  );
};
export default InquirySection;
