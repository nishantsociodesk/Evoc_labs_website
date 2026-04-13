"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    quote:
      "What I liked most is the transparency. Every order, every rupee is visible on one dashboard.",
    author: "Ankit Sharma",
    role: "Co-Founder, Shopify Store",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit",
  },
  {
    id: 2,
    quote:
      "RTO was killing our margins earlier. After using Evoc Labz, our delivered order quality improved massively.",
    author: "Sandeep Patel",
    role: "Founder, Ecommerce Brand",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandeep",
  },
  {
    id: 3,
    quote:
      "Paying only on delivered orders makes complete sense. Evoc Labz feels more like a partner than a service provider.",
    author: "Amit Gupta",
    role: "Brand Owner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
  },
  {
    id: 4,
    quote:
      "We stopped wasting money on multiple tools. Everything is now managed from a single platform.",
    author: "Neha Agarwal",
    role: "Founder, Lifestyle Brand",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
  },
  {
    id: 5,
    quote:
      "Finally a system that focuses on profit, not just ROAS screenshots. Evoc Labz shows the real picture.",
    author: "Vikas Mehta",
    role: "D2C Entrepreneur",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikas",
  },
];

const TestimonialCard = ({ testimonials = testimonialData }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div id="testimonials" className="relative flex min-h-[450px] w-full items-center justify-center bg-transparent px-4 py-12 sm:p-8 overflow-hidden z-10">
      {/* Background intentionally left fully transparent to inherit global #08070b and keep consistent with Hero */}

      <div className="relative z-10 w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="rounded-2xl sm:rounded-3xl border border-white/6 bg-[#08070b] p-6 sm:p-10 md:p-12 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              {/* Quote Text - Responsive sizing */}
              <blockquote
                className="mb-6 sm:mb-10 text-lg sm:text-2xl md:text-3xl font-normal leading-relaxed text-[#f7f8f8] italic tracking-tight"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                “{testimonials[index].quote}”
              </blockquote>

              {/* Author Section - Layout stays consistent but scales down */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative">
                  <div className="h-10 w-10 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-white/6">
                    <img
                      src={testimonials[index].avatar}
                      alt={testimonials[index].author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#08070b] border border-white/6">
                    <Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#f7f8f8]">
                    {testimonials[index].author}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#e6e6e6] uppercase tracking-widest font-normal">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots - Tappable size for mobile */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
