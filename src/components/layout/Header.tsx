import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="lg:hidden">
        <div className="px-4 py-3 flex justify-between items-center shadow-[0px_4px_16px_0px_#7E858E29]">
          <img src="/images/logo.svg" alt="logo" />
          <button className="px-3 py-1 text-sm font-normal text-[#111720] border-[3px] border-[#F98807] rounded-[20px] shadow-[-5px_5px_0px_0px_#F98807]">
            Call now
          </button>
        </div>
        <div className="px-4 py-2 flex justify-between overflow-auto flex-nowrap [&>*:not(:last-child)]:mr-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-sm font-normal text-[#111720] shrink-0"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-lg:hidden">
        <div className="p-5 xl:px-[132px] flex justify-between items-center shadow-[0px_4px_16px_0px_#7E858E29]">
          <img src="/images/logo.svg" alt="logo" />
          <div className="px-4 py-2 flex justify-between overflow-auto flex-nowrap [&>*:not(:last-child)]:mr-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-base font-normal text-[#111720] shrink-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="px-3 py-1 text-base font-medium text-[#111720] border-[3px] border-[#F98807] rounded-[20px] shadow-[-5px_5px_0px_0px_#F98807]">
            Call now: [+84] 901.374.667
          </button>
        </div>
      </div>
    </header>
  );
}

const NAV_LINKS = [
  {
    id: 1,
    name: "About us",
    url: "/about",
  },
  {
    id: 2,
    name: "Why Talent Scout",
    url: "/why-talent-scout",
  },
  {
    id: 3,
    name: "Our Process",
    url: "/our-process",
  },
  {
    id: 4,
    name: "Contact us",
    url: "/contact",
  },
];
