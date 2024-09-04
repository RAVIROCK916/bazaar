import Link from "next/link";

import { Button } from "@/components/Button";
import { ChevronRight } from "lucide-react";

const page = () => {
  return (
    <div className="*:py-28">
      <section>
        <div className="space-y-6 text-center">
          <h1>Welcome to your Profile</h1>
          <p>Manage your cart, orders, and account details in one place.</p>
        </div>
      </section>
      <section className="space-y-20">
        <div className="space-y-4 text-center">
          <p className="text-sm">Access</p>
          <h2>Your Cart and Orders</h2>
          <p>Easily view and manage your cart, orders, and account settings.</p>
        </div>
        <div className="flex gap-x-8 *:rounded *:border *:border-neutral-800">
          <div className="flex flex-2 flex-wrap items-center p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <strong className="">Account</strong>
                <h5>Settings</h5>
                <p className="font-semibold">
                  Update your account information and preferences.
                </p>
              </div>
              <Button intent="ghost" className="p-0">
                Update
                <ChevronRight className="ml-2" />
              </Button>
            </div>
            <figure className="h-48">
              <img src="/latest-collection.png" alt="" />
            </figure>
          </div>
          <div className="flex flex-1 items-center p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <strong className="">Order</strong>
                <h5>History</h5>
                <p className="font-semibold">
                  Track and manage your past orders with ease.
                </p>
              </div>
              <Button intent="ghost" className="p-0">
                Manage
                <ChevronRight className="ml-2" />
              </Button>
            </div>
            <figure>
              <img src="/latest-collection.png" alt="" />
            </figure>
          </div>
          <div className="flex flex-1 items-center p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <strong className="">Products</strong>
                <h5>Cart</h5>
                <p className="font-semibold">
                  View and update your cart items at a glance.
                </p>
              </div>
              <Link href="/profile/cart" className="inline-block">
                <Button intent="ghost" className="p-0">
                  View
                  <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <figure>
              <img src="/latest-collection.png" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
