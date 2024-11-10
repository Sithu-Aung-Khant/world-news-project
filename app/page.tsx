import MainNews from "@/components/MainNews";
import MoreNews from "@/components/MoreNews";
import NewsCarousel from "@/components/NewsCarousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
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
        <div className="w-full md:w-[75%] mx-auto h-max my-6">
          <NewsCarousel />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
