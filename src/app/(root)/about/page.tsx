import { Button } from "@/components/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="*:py-28">
      <section className="max-w-3xl space-y-6">
        <p className="font-semibold">Innovate</p>
        <h1>Transforming E-commerce Experience</h1>
        <p>
          At our company, we are dedicated to revolutionizing the way people
          shop online.
        </p>
        <div className="flex gap-x-4 pt-4">
          <Button>Learn More</Button>
          <Button intent="outline">Contact Us</Button>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-sm font-semibold">Change</p>
          <h2>Transforming the Way You Shop Online</h2>
          <p>
            At our company, we have a rich history and background in the
            e-commerce industry. We have been providing top-quality products and
            exceptional customer service for over a decade. Our mission is to
            revolutionize the way people shop online by offering a seamless and
            enjoyable shopping experience.
          </p>
          <div className="mx-auto flex max-w-fit gap-x-4 pt-4">
            <Button intent="outline">Learn More</Button>
            <Button intent="ghost">
              Sign Up <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </section>
      <section className="space-y-8 text-center">
        <p className="font-bold">
          Trusted by top industry leaders and collaborators
        </p>
        <div className="flex justify-center gap-x-12">
          <span>
            <img src="/next.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/vercel.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/next.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/vercel.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/next.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/vercel.svg" alt="" className="w-28" />
          </span>
        </div>
        <div className="flex justify-center gap-x-12">
          <span>
            <img src="/next.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/vercel.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/next.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/vercel.svg" alt="" className="w-28" />
          </span>
          <span>
            <img src="/next.svg" alt="" className="w-28" />
          </span>
        </div>
      </section>
      <section>
        <div className="flex items-center gap-x-20">
          <div className="space-y-4">
            <h3>Date</h3>
            <h4>Our Journey So Far</h4>
            <p>
              Discover the milestones and significant achievements that have
              shaped our company's history.
            </p>
            <div className="flex gap-x-6 pt-4">
              <Button intent="outline">Learn More</Button>
              <Button intent="ghost">
                Sign Up <ChevronRight className="size-5" />
              </Button>
            </div>
          </div>
          <figure>
            <Image
              src="/Latest Collection.png"
              width={696}
              height={696}
              alt="Latest Collection"
            />
          </figure>
        </div>
      </section>
      <section>
        <div className="space-y-4">
          <p className="text-sm font-semibold">Experienced</p>
          <h2>Meet Our Team</h2>
          <p>Get to know the talented individuals behind our company.</p>
        </div>
        <div></div>
      </section>
    </div>
  );
};
export default page;
