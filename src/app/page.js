import CodingLeaderboard from "./landingpage/codingleaderboard/page";
import { BackgroundBeamsDemo } from "./landingpage/page";
import { TimelineDemo } from "./Timeline/page";



export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-[#404371] to-[#780831]">
      <BackgroundBeamsDemo></BackgroundBeamsDemo>
      <CodingLeaderboard></CodingLeaderboard>
      <TimelineDemo></TimelineDemo>

      
   
    </div>
  );
}
