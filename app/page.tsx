import HappeningNow from "@/components/sections/HappeningNow";
import MainNews from "@/components/sections/MainNews";
import MoreNews from "@/components/sections/MoreNews";
import Trending from "@/components/sections/Trending";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full md:flex h-max bg-white">
        <div className="md:w-[65%] w-full">
          <MainNews />
        </div>
        <div className="w-full md:w-[35%]">
          <MoreNews />
        </div>
      </div>
      {/* Trending Section */}
      <div className="w-full md:w-[75%] mx-auto h-max my-8">
        <Trending />
      </div>
      {/* Happening Now Section */}
      <div className="w-full md:w-[75%] mx-auto h-max my-8">
        <HappeningNow />
      </div>
    </main>
  );
}
