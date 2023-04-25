import { heroArrType } from "@/src/types";
import React from "react";
type prop = {
  item: heroArrType;
};
export default function PartnersCard({ item }: prop) {
  return (
    <section className="">
      <img
        src={item.img.src}
        alt=""
        className="w-64 h-28  shadow-[0_1px_5px_#D30000] hover:scale-105 transition-all duration-500 ease-in-out rounded-md object-contain"
      />
    </section>
  );
}
