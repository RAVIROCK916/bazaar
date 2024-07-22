import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

const NewsLetterSection = () => {
  return (
    <section className="flex gap-x-20 py-28 *:flex-1">
      <h2>Stay Updated with Our Newsletter</h2>
      <div className="space-y-6">
        <p className="text-base">
          Get the latest updates and exclusive offers straight to your inbox.
        </p>
        <div className="flex flex-col gap-y-4 pt-4">
          <div className="flex gap-x-4">
            <Input type="email" placeholder="Enter your email" />
            <Button className="min-w-fit">Subscribe Now</Button>
          </div>
          <small>By subscribing, you agree to our Terms and Conditions.</small>
        </div>
      </div>
    </section>
  );
};
export default NewsLetterSection;
