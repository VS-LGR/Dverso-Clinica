import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { MeetAnakin } from "@/components/sections/MeetAnakin";
import { ScheduleConsultation } from "@/components/sections/ScheduleConsultation";

export default function Home() {
  return (
    <>
      <WhoWeAre />
      <HowWeWork />
      <MeetAnakin />
      <ScheduleConsultation />
    </>
  );
}
