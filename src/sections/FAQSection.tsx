import Accordion from "@/components/Accordion";
import { Button } from "@/components/Button";
import { faqs } from "@/data";
import Link from "next/link";

const FAQSection = () => {
  return (
    <section className="space-y-20 py-28 text-center">
      <div className="space-y-6">
        <h2>FAQs</h2>
        <p>Find answers to commonly asked questions about our products.</p>
      </div>
      <Accordion data={faqs} />
      <div className="space-y-6">
        <div className="space-y-4">
          <h4>Still have questions?</h4>
          <p>Feel free to reach out to us.</p>
        </div>
        <Link href="/contact">
          <Button intent="outline" className="mx-auto mt-4">
            Contact
          </Button>
        </Link>
      </div>
    </section>
  );
};
export default FAQSection;
