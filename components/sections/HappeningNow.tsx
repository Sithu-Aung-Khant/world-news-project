import Header from "./Header";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Make sure `trending` is imported or defined in this file
const happeningNow = [
  {
    title: "Breaking News",
    text: "Major breakthrough in renewable energy research changes the industry.",
    published: "10 mins ago",
    image: "https://www.gstatic.com/webp/gallery/1.jpg",
  },
  {
    title: "Tech Innovation",
    text: "New AI model surpasses human accuracy in medical diagnostics.",
    published: "1 hour ago",
    image: "https://www.gstatic.com/webp/gallery/2.jpg",
  },
  {
    title: "Sports Highlight",
    text: "Underdog team wins championship in a stunning final match.",
    published: "30 mins ago",
    image: "https://www.gstatic.com/webp/gallery/5.jpg",
  },
  {
    title: "Economic Update",
    text: "Global markets rally after positive economic reports.",
    published: "2 hours ago",
    image: "https://www.gstatic.com/webp/gallery/4.jpg",
  },
  {
    title: "Health Alert",
    text: "New research suggests a potential cure for a widespread disease.",
    published: "3 hours ago",
    image: "https://www.gstatic.com/webp/gallery/5.jpg",
  },
  {
    title: "Space Exploration",
    text: "NASA announces successful test of its new spacecraft.",
    published: "4 hours ago",
    image: "https://www.gstatic.com/webp/gallery/4.jpg",
  },
  {
    title: "Cultural Event",
    text: "Annual festival draws record crowds with new attractions.",
    published: "6 hours ago",
    image: "https://www.gstatic.com/webp/gallery/1.jpg",
  },
  {
    title: "Environmental News",
    text: "Endangered species shows signs of population recovery.",
    published: "8 hours ago",
    image: "https://www.gstatic.com/webp/gallery/3.jpg",
  },
];

export default function HappeningNow() {
  return (
    <>
      <Header title="happening now" />
      <div className="w-full md:flex gap-x-8">
        <div className="w-full md:w-[70%] h-full">
          {happeningNow
            .slice(2, 4)
            .reverse()
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg my-4 text-white hover:scale-100"
                >
                  <CardContent className="relative">
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt="Image"
                      unoptimized
                      className="rounded-md w-full h-96"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="mt-2 p-6 absolute bottom-8 left-8">
                      <span className="text-xl font-semibold ">
                        {item.title}
                      </span>
                      <p className="text-sm  my-1">{item.text}</p>
                      <div className=" flex items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4 mr-1 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs mt-0.5">{item.published}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
        <div className="w-full md:w-[30%]">
          {happeningNow
            .slice(3, 6)
            .reverse()
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  className="my-4 !shadow-none 
                !border-none"
                >
                  <CardContent className="bg-slate-100 ">
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt="Image"
                      unoptimized
                      className="rounded-md w-full h-48"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="py-2">
                      <span className="text-xl font-semibold">
                        {item.title}
                      </span>
                      <div className="text-textGray flex items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4 mr-1 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs mt-0.5">{item.published}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
}
