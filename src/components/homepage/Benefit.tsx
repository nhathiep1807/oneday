import GridIcon from "../icons/GridIcon";

export default function Benefit() {
  return (
    <div className="px-4 lg:px-14 xl:px-[135px] max-w-[1500px] mx-auto">
      <div>
        <div className="mb-16 max-w-[768px] m-auto">
          <p className="text-[40px] leading-[40px] text-[#1E293A] font-bold text-center lg:mb-10">
            Your benefits with <br />
            Talent<span className="text-[#8D33FF]">Scout</span>
          </p>
          <p className="max-lg:hidden text-[22px] font-normal text-[#1E293A] text-center">
            As an employer, you compete for the best talent! You need an
            experienced partner that can provide you with comprehensive HR
            solutions to ensure that the right talent comes to you.
          </p>
        </div>
        <div className="grid gap-x-2 gap-y-6 grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-start lg:items-center"
            >
              <div className="w-[54px] h-[54px] rounded-full bg-[#F8F5FF] flex justify-center items-center">
                <GridIcon />
              </div>
              <p className="text-base lg:text-xl font-medium text-[#1E293A] mt-4 lg:mt-5 lg:text-center">
                {benefit.title}
              </p>
              <p className="text-base lg:text-xl font-semibold text-[#8D33FF] lg:mt-2 lg:text-center">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const BENEFITS = [
  {
    id: 1,
    title: "Find the right person",
    desc: "Within only 7 working days",
  },
  {
    id: 2,
    title: "Access to our",
    desc: "Pool of high grade passive candidates",
  },
  {
    id: 3,
    title: "Confidentiality",
    desc: "We protect the employer's brand and hiring history",
  },
  {
    id: 4,
    title: "Competitive Pricing",
    desc: "Effective cost savings for every company size",
  },
];
