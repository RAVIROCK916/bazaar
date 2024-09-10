import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { toast } from "@/components/ui/use-toast";

const NewsLetterSection = () => {
  return (
    <section className="gap-x-20 space-y-4 py-12 *:flex-1 sm:flex sm:space-y-0 sm:py-28">
      <h2>Stay Updated with Our Newsletter</h2>
      <div className="space-y-2 sm:space-y-6">
        <p className="text-base">
          Get the latest updates and exclusive offers straight to your inbox.
        </p>
        <div className="flex flex-col gap-y-4 pt-4">
          <div className="flex gap-x-4">
            <Input type="email" placeholder="Enter your email" />
            <Button
              className="min-w-fit"
              onClick={() =>
                toast({
                  title: "Newsletter",
                  description: "Subscribed successfully",
                  variant: "success",
                })
              }
            >
              Subscribe Now
            </Button>
          </div>
          <small>By subscribing, you agree to our Terms and Conditions.</small>
        </div>
      </div>
    </section>
  );
};
export default NewsLetterSection;
