import Image from "next/image";
import BgImg from "@/public/3.jpg";

export default function MainNews() {
  return (
    <div className="relative">
      <Image
        width={200}
        height={200}
        quality={100}
        unoptimized
        alt="background"
        className="w-full h-[70vh]"
        style={{ objectFit: "cover" }}
        src={BgImg}
      />
      <div className="absolute inset-0 flex items-center flex-col justify-center">
        <div className="w-[60%] text-white ">
          <h1 className="text-3xl font-bold">WORLD NEWS</h1>
          <div className="h-px w-full mx-auto flex bg-gray-200 my-5"></div>
          <h2 className="text-2xl font-bold">
            Amazing places in America to visit.
          </h2>
          <p>
            For some reason - this country, this city, this neighborhood, this
            particular street - is the place you are living a majority of your
            life in.
          </p>
          <button
            type="button"
            aria-label="learn more"
            className="px-6 uppercase text-xs font-sans font-medium py-2 bg-pink-500/95 hover:bg-pink-600 rounded-lg my-3"
          >
            learn more
          </button>
        </div>
      </div>
    </div>
  );
}
