import Faqs from "@/components/home/Faqs";
import Hero from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import WeddingCost from "@/components/home/WeddingCost";
import WhatWeOffer from "@/components/home/WhatWeOffer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
    <Hero/>
    <WhatWeOffer/>
    <HowWeWork/>
    <WeddingCost/>
    <Faqs/>
    </div>
  );
}
