import { testimonials } from "@/data";
import { useEffect, useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { HiStar } from "react-icons/hi";

const TestimonialsSection = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({
      left: currIndex * scrollRef.current?.clientWidth,
      behavior: "smooth",
    });
  }, [currIndex]);
  return (
    <section className="relative py-28">
      <div className="flex items-center justify-center">
        <span
          className="absolute left-0 grid size-12 cursor-pointer place-content-center rounded-full border border-neutral-600 hover:bg-neutral-100"
          onClick={() =>
            setCurrIndex((prev) =>
              prev - 1 < 0 ? testimonials.length - 1 : prev - 1,
            )
          }
        >
          <GoArrowLeft className="size-6 font-light" />
        </span>
        <div className="overflow-hidden" ref={scrollRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full">
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-8">
                  <div className="flex gap-1">
                    {new Array(testimonial.rating).fill(0).map((_, i) => (
                      <span key={`star-${i}`}>
                        <HiStar className="size-8 text-primary" />
                      </span>
                    ))}
                  </div>
                  <h5 className="text-center">{testimonial.description}</h5>
                  <div className="flex items-stretch gap-5">
                    <div className="flex items-center gap-4">
                      <span className="size-12 overflow-hidden rounded-full bg-neutral-200">
                        <img src={testimonial.image} alt="" />
                      </span>
                      <div>
                        <strong>{testimonial.name}</strong>
                        <p className="text-base">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="w-px bg-primary"></div>
                    <div className="my-auto">Webflow</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span
          className="absolute right-0 grid size-12 cursor-pointer place-content-center rounded-full border border-neutral-600 hover:bg-neutral-100"
          onClick={() =>
            setCurrIndex((prev) => (prev + 1) % testimonials.length)
          }
        >
          <GoArrowRight className="size-6 font-light" />
        </span>
      </div>
    </section>
  );
};
export default TestimonialsSection;
