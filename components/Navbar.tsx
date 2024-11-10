const navLinks = [
  { name: "Home", to: "#" },
  { name: "discovery", to: "#" },
  { name: "photos", to: "#" },
  { name: "contact", to: "#" },
];

import Link from "next/link";
import Image from "next/image";
import Profile from "@/public/profile.jpg";

export default function Navbar() {
  return (
    <nav className="flex text-sm justify-between p-4 font-sans sticky top-0 z-20 bg-slate-100 font-semibold tracking-wide">
      <div className="uppercase text-pink-500 mt-1">Logo</div>
      <div className="flex gap-x-5 items-center">
        <div className="flex gap-x-5 text-gray-500">
          {navLinks.map((link, index) => {
            return (
              <Link key={index} href={link.to} className="uppercase">
                {link.name}
              </Link>
            );
          })}
        </div>
        <Image
          width={100}
          height={100}
          src={Profile}
          className="rounded-full size-8"
          alt="profile image"
        />
      </div>
    </nav>
  );
}
