import { Button } from "@/components/Button";
import {
  ChevronRight,
  FolderCheck,
  IndianRupee,
  MonitorSmartphone,
} from "lucide-react";

const ShoppingExperienceSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 py-28 text-center">
      <div className="max-w-3xl space-y-4">
        <span className="font-semibold">Simplified</span>
        <h2 className="!mb-6">Streamline Your Online Shopping Experience</h2>
        <p>
          Our e-commerce platform offers a user-friendly interface and powerful
          features to help you run your online business smoothly. From inventory
          management to secure payment processing, we've got you covered.
        </p>
      </div>
      <div className="space-y-12">
        <div className="flex gap-12">
          <div className="flex flex-col items-center justify-center gap-6">
            <FolderCheck className="size-6" />
            <h4>Effortless Inventory Management</h4>
            <p>
              Stay organized with our intuitive inventory management system that
              tracks your products and updates stock levels in real-time.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <IndianRupee className="size-6" />
            <h4>Seamless Payment Processing</h4>
            <p>
              Accept secure online payments from your customers with ease,
              ensuring a smooth and hassle-free checkout process.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <MonitorSmartphone className="size-6" />
            <h4>Responsive Storefront Designing!</h4>
            <p>
              Create a visually stunning online store that adapts to any device,
              providing a seamless shopping experience for your customers.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <Button intent="outline">Learn More</Button>
        <Button intent="ghost">
          <span>Sign Up</span>
          <span>
            <ChevronRight />
          </span>
        </Button>
      </div>
    </section>
  );
};
export default ShoppingExperienceSection;
