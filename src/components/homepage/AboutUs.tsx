export default function AboutUs() {
  return (
    <div className="px-4 py-[128px] lg:pb-[192px] flex gap-3 lg:gap-11 flex-col lg:flex-row lg:items-center lg:px-14 xl:px-[135px]">
      <div>
        <p className="text-2xl lg:text-[45px] lg:leading-[63px] font-bold text-[#1E293A]">
          About us
        </p>
        <h1 className="text-[40px] lg:text-[60px] lg:leading-[84px] mb-8 font-bold bg-gradient-to-r from-[#5E2AD1] via-[#8514E9] to-[#A904F3] inline-block text-transparent bg-clip-text">
          A MEMBER OF HEYDEVS
        </h1>
        <p className="text-base font-normal text-[#475568] lg:hidden">
          Unlock the potential of HeyDevs’ extensive pool of tech talent,
          consisting of candidates who are verified “open-to-work,” and
          effortlessly fill any level of position your company requires.{" "}
        </p>
        <div className="max-lg:hidden text-[22px] font-normal text-[#111720]">
          <p className="">
            <span className="font-bold">Talent Scout</span> is a headhunting
            service developed by <span className="font-bold">HeyDevs</span>.
            With
            <span className="font-bold">Talent Scout</span>, recruiters can
            ensure they receive CVs exclusively from top-tier, highly qualified
            candidates by:
          </p>
          <ul className="mt-2 pl-8">
            <li className="list-disc">
              Leveraging Talent Scout’s “Consultants”, who are expertly trained
              with extensive experience in searching for candidates in the
              technology sector.
            </li>
            <li className="list-disc">
              Connecting to our huge network of “HR freelancers” (including
              HeyDevs extensive Talent Pool) to maximize reach to potential
              candidates.
            </li>
          </ul>
        </div>
      </div>
      <img
        src="/images/about-img.png"
        alt="about image"
        className="w-full lg:-order-10 max-w-[739px] lg:w-1/2 m-auto"
      />
    </div>
  );
}
