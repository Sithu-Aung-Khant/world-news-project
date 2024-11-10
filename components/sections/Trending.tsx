import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const trending = [
  {
    title: "Breaking News",
    text: "Major breakthrough in renewable energy research changes the industry.",
    published: "10 mins ago",
    image: "https://www.gstatic.com/webp/gallery/1.jpg",
  },
  {
    title: "Tech Update",
    text: "Latest smartphone model features AI-driven enhancements for users.",
    published: "30 mins ago",
    image: "https://www.gstatic.com/webp/gallery/2.jpg",
  },
  {
    title: "Sports Highlight",
    text: "Underdog team wins the championship in a thrilling final match.",
    published: "1 hour ago",
    image: "https://www.gstatic.com/webp/gallery/3.jpg",
  },
  {
    title: "Global Economy",
    text: "Stock markets rally as new economic data shows positive growth.",
    published: "3 hours ago",
    image: "https://www.gstatic.com/webp/gallery/4.jpg",
  },
  {
    title: "Health Alert",
    text: "New research finds potential benefits of a plant-based diet for heart health.",
    published: "5 hours ago",
    image: "https://www.gstatic.com/webp/gallery/5.jpg",
  },
  {
    title: "Entertainment Buzz",
    text: "Famous director announces the release date for the highly anticipated sequel.",
    published: "8 hours ago",
    image: "https://www.gstatic.com/webp/gallery/6.jpg",
  },
];

export default function Trending() {
  return (
    <Carousel className="w-full">
      <div className="flex relative justify-between items-center w-full">
        <h1 className="text-2xl uppercase font-medium font-sans">trending</h1>
        <div className="flex gap-x-5">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent className="-ml-1 my-4">
        {trending.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 mr-1"
            >
              <div className="pr-6 font-sans">
                <Card className="hover:shadow-lg">
                  <CardContent className="">
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt="Image"
                      unoptimized
                      className="rounded-t-md w-full h-52"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="mt-2 p-6">
                      <span className="text-xl font-semibold">
                        {item.title}
                      </span>
                      <p className="text-sm text-textGray my-1">{item.text}</p>
                      <div className="text-textGray flex items-center ">
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
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
