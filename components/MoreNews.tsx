import Header from "./Header";
const news = [
  {
    header: "Travel",
    title: "Article title",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum.",
    published: "2mins ago",
  },
  {
    header: "Technology",
    title: "Article title",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum.",
    published: "2mins ago",
  },
];

export default function MoreNews() {
  return (
    <div className="w-[65%] mx-auto flex flex-col h-full justify-center">
      <Header title="more news" />
      <div className="h-px w-full mx-auto flex bg-gray-200 my-5"></div>
      <div className="w-full text-start">
        {news.map((item, index) => {
          return (
            <div key={index} className="pb-4">
              <h2 className="text-lg uppercase font-medium font-sans my-2 text-pink-500">
                {item.header}
              </h2>
              <h2 className="leading-none text-sm text-black font-bold font-sans">
                {item.title}
              </h2>
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
          );
        })}
      </div>
    </div>
  );
}
