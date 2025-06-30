import React from "react";
import AboutSection from "@/components/about/AboutSection";
import ClosingNote from "@/components/about/ClosingNote";
import OurJourney from "@/components/about/OurJourney";
import WhyTriyuginarayan from "@/components/about/WhyTriyuginarayan";
import NotPlanners from "@/components/about/NotPlanners";
import OurMission from "@/components/about/OurMission";

const page = () => {
  return (
    <div>
      <AboutSection/>
      <OurJourney/>
      <WhyTriyuginarayan/>
      <OurMission/>
      <NotPlanners/>
      <ClosingNote/>
    </div>
  );
};

export default page;
