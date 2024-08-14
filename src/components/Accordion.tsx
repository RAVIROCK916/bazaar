"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type props = {
  data: {
    id: number;
    title: string;
    content: string;
  }[];
};

const Accordion = ({ data }: props) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  return (
    <div className="mx-auto max-w-3xl">
      {data.map((faq, i) => (
        <div
          key={faq.id}
          className="cursor-pointer border-b border-neutral-500 py-4 first:border-t first:border-neutral-700"
          onClick={() => {
            if (currentIndex === i) {
              setCurrentIndex(-1);
              return;
            }
            setCurrentIndex(i);
          }}
        >
          <div className="flex items-center justify-between">
            <p className="font-semibold">{faq.title}</p>
            {currentIndex === i ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {currentIndex === i && (
            <p className="mt-2 text-left text-neutral-950 transition-all duration-300 ease-in-out">
              {faq.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
