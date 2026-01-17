"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MagazineCard from "@/components/cards/MagazineCard";
import { magazines } from "@/data/magazines/magazines";

export default function MagazineSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = magazines.length - cardsToShow;

  const scrollToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
  };

  const scrollLeft = () => {
    scrollToIndex(currentIndex - 1);
  };

  const scrollRight = () => {
    scrollToIndex(currentIndex + 1);
  };

  return (
    <section className="bg-white py-16">
      <div className="flex justify-between max-w-[1600px] mx-auto px-6">
        {/* Header */}
        <div className="flex gap-10 mb-8">
          {/* Title */}
          <div>
            <h2 className="text-primary-gray text-[22px]">Sayılar</h2>
            <h2 className="text-primary-blue text-[28px] font-bold">Dergiler</h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
            >
              <Image src="/icons/sliderRight.svg" alt="Right" width={40} height={40} className="rotate-180" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-full  flex items-center justify-center disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
            >
              <Image src="/icons/sliderRight.svg" alt="Right" width={40} height={40} />
            </button>
          </div>
        </div>

        <div>
          {/* View All Button */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-gray-300 text-secondary-dark px-6 py-2 rounded-full text-[14px] hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            Tümünü Görüntüle
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.9639 7.81854C15.8593 7.309 15.5836 7.03981 15.3364 6.80907L9.03257 0.425417C8.4716 -0.141806 7.56835 -0.141806 7.00738 0.425417C6.73165 0.694607 6.58903 1.05994 6.58903 1.45411C6.58903 1.83867 6.74115 2.204 7.00738 2.4828L11.0578 6.57834H1.39767C0.627526 6.57834 0 7.21286 0 8.0012C0 8.78955 0.627526 9.41445 1.39767 9.41445H11.0578L7.10245 13.4138C6.54148 13.9811 6.52247 14.8944 7.04541 15.4905C7.32114 15.7981 7.71097 15.9904 8.11981 16H8.16735C8.56668 16 8.93749 15.8462 9.22273 15.5578L15.4029 9.3087C15.5836 9.12603 16.1255 8.57804 15.9734 7.82815L15.9639 7.81854Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative overflow-hidden max-w-[1600px] mx-auto">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out p-10"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {magazines.map((magazine, index) => (
            <div
              key={index}
              className="shrink-0"
              style={{
                width: `calc((100% - ${(cardsToShow - 1) * 24}px) / ${cardsToShow})`,
              }}
            >
              <MagazineCard {...magazine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
