import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[1%] z-50 top-0 w-full xl:w-auto xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-start justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max p-4 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-lg">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300 px-4`}
            href={link.path}
            key={i}
          >
            {/* tolltip */}
            

            {/* icon */}
            <div>
              <link.Icon aria-hidden className="text-2xl"/>
            </div>
            <div className="ml-5 text-sm hidden md:block">
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
