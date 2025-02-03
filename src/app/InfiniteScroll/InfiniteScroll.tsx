"use client";
import { useEffect, useRef } from "react";

interface InfiniteScrollProps {
  items: string[]; // Accepts an array of strings (text or image URLs)
  speed?: "slow" | "normal" | "fast"; // Custom speed control
  direction?: "left" | "right"; // Scroll direction
}


const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  speed = "normal",
  direction = "left",
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const inner = scroller.querySelector(".scroller__inner") as HTMLElement;
    if (!inner) return;

    // Clone the content for infinite effect
    inner.innerHTML += inner.innerHTML;

    // Set animation duration based on speed
    let duration = "40s";
    if (speed === "fast") duration = "20s";
    if (speed === "slow") duration = "60s";

    // Apply styles dynamically
    inner.style.animation = `scroll ${duration} linear infinite`;
    if (direction === "right") {
      inner.style.animationDirection = "reverse";
    }
  }, [speed, direction]);

  return (
    <div ref={scrollerRef} className="scroller overflow-hidden relative w-full">
      <div className="scroller__inner flex whitespace-nowrap gap-4">
        {items.map((item, index) => (
          <div key={index} className="text-white bg-pink-600 px-4 py-2 rounded-lg">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
