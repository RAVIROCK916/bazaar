import { Button } from "@/components/Button";
import { pricingOptions } from "@/data";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const PricingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <section className="space-y-12 py-28">
      <div className="space-y-8 text-center">
        <p className="text-base font-semibold">Affordable</p>
        <h2>Pricing Options</h2>
        <p>Choose the plan that suits your needs and budget.</p>
        <span className="flex justify-center">
          {pricingOptions.map((option, i) => (
            <Button
              key={`option-${i}`}
              intent={currentIndex === i + 1 ? "primary" : "outline"}
              onClick={() => {
                if (currentIndex !== i + 1) {
                  setCurrentIndex(i + 1);
                }
              }}
            >
              {option.title}
            </Button>
          ))}
        </span>
      </div>
      <div className="flex gap-x-8 *:flex-1">
        {pricingOptions[currentIndex - 1].plans?.map((plan, i) => (
          <div
            key={`plan-${i}`}
            className="space-y-8 border border-primary p-8"
          >
            <div className="space-y-1">
              <h6>{plan.title}</h6>
              <p>{plan.description}</p>
            </div>
            <hr />
            <div className="space-y-8">
              <h1>
                {plan.price} <span className="text-lg">/{plan.period}</span>
              </h1>
              <Button className="w-full">Get Started</Button>
            </div>
            <hr />
            <div className="space-y-4">
              {plan.features.map((feature, i) => (
                <p
                  key={`feature-${i}`}
                  className="flex items-center gap-x-4 text-base"
                >
                  <FaCheck />
                  {feature}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
