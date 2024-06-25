import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TiktokIcon from "../icons/TiktokIcon";
import ArrowRightIcon from "../icons/ArrowRight";

export default function IntroSection() {
  return (
    <div className="relative pt-[35px] xl:pt-[144px] bg-[url('/images/intro-mobile-bg.png')] bg-no-repeat bg-cover bg-center pb-[155px] lg:bg-none">
      {/* <img
        src="/images/intro-mobile-bg.png"
        alt="intro-bg"
        className="absolute top-0 left-0 w-full md:hidden"
      /> */}
      <div className="px-[18px] py-8 md:px-14 md:py-24 lg:px-[144px] lg:py-11">
        <div className="grid gap-[18px] xl:gap-6 relative z-[10]">
          <img
            src="/images/blur-circle-1.png"
            alt="blur-circle-1"
            className="absolute top-[-90px] left-[70px] md:hidden"
          />
          <img
            src="/images/blur-circle-2.png"
            alt="blur-circle-2"
            className="absolute bottom-[-90px] left-[115px] md:hidden"
          />
          <img
            src="/images/small-alert.png"
            alt="small alert"
            className="absolute top-0 right-0 w-[122px] md:hidden"
          />
          <img
            src="/images/talent-scout.png"
            alt="talent-scout"
            className="w-[310px] xl:w-[630px]"
          />
          <img
            src="/images/alert.png"
            alt="alert"
            className="absolute top-0 right-0 max-md:hidden w-[300px] xl:w-[500px] 2xl:w-[800px] xl:top-[-100px]"
          />
          <p className="text-xl font-bold text-[#1E293A] xl:text-[40px] xl:leading-[52px]">
            FOCUS ON YOUR BUSINESS <br />
            WE DELIVER THE TALENT
          </p>
          <div className="flex gap-[8.5px]">
            {SOCIALS.map((social) => (
              <Link key={social.id} href={social.href}>
                <div className="w-[26px] h-[26px] xl:w-[46px] xl:h-[46px] rounded-full flex items-center justify-center bg-[#F8F5FF] text-[#7000FF]">
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
          <button className="px-7 py-2 text-base xl:px-[52px] xl:py-3 xl:text-[22px] flex items-center gap-2 w-fit mt-[6px] xl:mt-6 xl font-medium text-[#111720] bg-white border-[3px] border-[#7000FF] rounded-[20px] shadow-[-5px_5px_0px_0px_#7000FF]">
            Contact us now <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

const SOCIALS = [
  {
    id: 1,
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com",
  },
  {
    id: 2,
    icon: <TiktokIcon />,
    href: "https://www.tiktok.com",
  },
  {
    id: 3,
    icon: <FacebookIcon />,
    href: "https://www.facebook.com",
  },
];
