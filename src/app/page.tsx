import { Hero } from "@/components/sections/Hero";
import { PawDivider } from "@/components/ui/PawDivider";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { MeetAnakin } from "@/components/sections/MeetAnakin";
import { ScheduleConsultation } from "@/components/sections/ScheduleConsultation";

export default function Home() {
  return (
    <>
      <Hero />
      <PawDivider />
      <WhoWeAre />
      <HowWeWork />
      <MeetAnakin />
      <ScheduleConsultation />
    </>
  );
}
