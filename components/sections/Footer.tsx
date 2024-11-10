import LogoAndLinks from "./LogoAndLinks";
import EmailAndSocials from "./EmailAndSocials";

export default function Footer() {
  return (
    <footer className="w-full h-64 bg-textGray mt-8">
      <div className="md:w-[75%] py-14 md:flex mx-auto">
        <div className="w-1/2">
          <LogoAndLinks />
        </div>
        <div className="w-1/2">
          <EmailAndSocials />
        </div>
      </div>
    </footer>
  );
}
