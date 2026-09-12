"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Shell } from "@/components/layout/Shell";
import { site } from "@/config/site";

import "swiper/css";
import "swiper/css/effect-fade";

export function QuoteBand() {
  return (
    <Shell className="flex min-h-40 flex-col items-center justify-center border-t border-(--line) bg-(--bg) px-8 py-12 text-center select-none">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ mode: "out-in" }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        speed={1000}
        className="mx-auto w-full max-w-145"
      >
        {site.quotes.map((quote, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex min-h-35 flex-col items-center justify-center">
              <span className="font-serif text-4xl leading-none text-(--soft)">
                &ldquo;
              </span>
              <p className="font-serif -mt-2 max-w-md text-[20px] leading-snug italic text-(--fg) sm:text-[22px]">
                {quote.text}
              </p>
              <p className="font-mono mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-(--soft)">
                — {quote.author}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Shell>
  );
}
