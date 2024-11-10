import LogoAndLinks from "./LogoAndLinks";
import EmailAndSocials from "./EmailAndSocials";

export default function Footer() {
  return (
    <footer className="w-full h-max bg-textGray/90 mt-20">
      <div className="md:w-[75%] md:py-14 md:flex mx-auto">
        <div className="w-[90%] mx-auto md:py-0 md:w-1/2">
          <LogoAndLinks />
        </div>
        <div className="w-full md:w-1/2">
          <EmailAndSocials />
        </div>
      </div>
    </footer>
  );
}
