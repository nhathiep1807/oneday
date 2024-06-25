import EyeIcon from "../icons/EyeIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TiktokIcon from "../icons/TiktokIcon";

export default function Footer() {
  return (
    <footer className="p-6">
      <div className="lg:hidden">
        <img src="/images/logo-footer.svg" alt="" />
        <div className="grid gap-6 mt-6 grid-cols-2">
          <div>
            <div className="flex gap-4">
              <LinkedinIcon />
              <TiktokIcon />
              <FacebookIcon />
            </div>
            <ul className="text-[#475568] mt-6 pl-6 text-xs grid gap-[14px]">
              <li className="list-disc">
                105 Cecil Street, #06-02H The Octagon, Singapore 069534
              </li>
              <li className="list-disc">
                +146E7 Nguyen Van Huong St, Thao Dien Ward, Thu Duc City, HCM
                City, Vietnam
              </li>
              <li className="list-disc">(+84) 325 858 667 info@heydevs.io</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <p className="text-base font-medium text-[#94A3B7]">Why HeyDevs</p>
            <p className="text-base font-medium text-[#94A3B7]">
              For Candidate
            </p>
            <p className="text-base font-medium text-[#1E293A]">For Business</p>
            <div className="w-full h-[1px] bg-[#ECECEC]"></div>
            <p className="text-base font-medium text-[#94A3B7]">Blog</p>
            <p className="text-base font-medium text-[#94A3B7]">CV Builder</p>
            <p className="text-base font-medium text-[#94A3B7]">Community</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#ECECEC] my-6"></div>
        <form className="grid gap-3">
          <p className="text-lg font-medium text-[#1E293A]">
            Subscribe to the HeyDevs Newsletter
          </p>
          <div className="grid gap-2">
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="px-3 py-[18px] rounded-xl text-[#94A3B7] border border-[#D2D2D2] text-sm w-full pr-10"
                placeholder="Enter your email"
              />
              <EyeIcon className="absolute top-1/2 -translate-y-1/2 right-4" />
            </div>
          </div>
          <p className="text-sm font-normal text-[#475568]">
            We will never spam your mailbox, just the best and most relevant
            news!
          </p>
          <button className="py-3 rounded-xl bg-[#7000FF] text-[22px] font-medium text-white">
            Subscribe
          </button>
        </form>
        <div className="w-full h-[1px] bg-[#ECECEC] my-6"></div>
      </div>
      <div className="max-lg:hidden flex justify-between items-center mt-10 px-16 min-[1440px]:px-[130px]">
        <div className="[&>*:not(:last-child)]:mb-8 w-[445px]">
          <img src="/images/logo.svg" alt="" />
          <p className="text-xl font-normal">
            Connecting companies with exceptional tech talent. Join our socials
            today to learn more.
          </p>
          <div className="flex gap-4">
            <LinkedinIcon className="w-6 h-6" />
            <TiktokIcon className="w-6 h-6" />
            <FacebookIcon className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1 flex justify-between max-w-[800px]">
          <div className="grid gap-5">
            <p className="text-xl font-medium text-[#475568]">Why HeyDevs</p>
            <p className="text-xl font-medium text-[#475568]">For Candidate</p>
            <p className="text-2xl font-bold text-[#1E293A]">For Business</p>
            <ul className="pl-6">
              <li className="list-disc font-medium text-lg text-[#475568]">
                HeyDevs
              </li>
              <li className="list-disc font-medium text-lg text-[#475568]">
                Talent Scout
              </li>
            </ul>
            <p className="text-xl font-medium text-[#475568]">Blog</p>
            <p className="text-xl font-medium text-[#475568]">CV Builder</p>
            <p className="text-xl font-medium text-[#475568]">Community</p>
          </div>
          <div className="max-w-[389px]">
            <p className="text-2xl font-bold text-[#1E293A]">Address</p>
            <ul>
              <li className="list-disc">
                105 Cecil Street, #06-02H The Octagon, Singapore 069534
              </li>
              <li className="list-disc">
                +146E7 Nguyen Van Huong St, Thao Dien Ward, Thu Duc City, HCM
                City, Vietnam
              </li>
              <li className="list-disc">+(+84) 325 858 667 info@heydevs.io</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start lg:flex-row justify-between lg:items-center text-[#94A3B7] lg:mt-10 lg:px-16 min-[1440px]:px-[130px]">
        <p className="text-base font-medium lg:text-xl">
          Copyright © <span className="text-[#1E293A]">HeyDevs</span> | Designed
          by HeyDevs
        </p>
        <div className="text-base font-medium lg:text-xl flex gap-3">
          <p>Term of use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
