import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Header({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-2xl uppercase font-medium font-sans">{title}</h1>
      <div className="flex gap-x-5">
        <button type="button" aria-label="go previous">
          <ChevronLeft
            strokeWidth={1.5}
            className="text-gray-600 hover:text-gray-900"
          />
        </button>
        <button type="button" aria-label="go next">
          <ChevronRight
            strokeWidth={1.5}
            className="text-gray-600 hover:text-gray-900"
          />
        </button>
      </div>
    </div>
  );
}
