import MainNews from "@/components/MainNews";
import MoreNews from "@/components/MoreNews";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <div className="w-full flex h-max bg-white">
          <div className="w-[65%]">
            <MainNews />
          </div>
          <div className="w-[35%]">
            <MoreNews />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
