import Link from "next/link";

import {
  RiTelegramFill,
  RiSkypeFill,
  RiGithubFill,
  RiWhatsappFill,
  RiLinkedinFill
} from "react-icons/ri";

export const socialData = [
  
  {
    name: "WhatsApp",
    link: "+380986403919",
    Icon: RiGithubFill,
  },
  {
    name: "Github",
    link: "https://github.com/codestar3524",
    Icon: RiGithubFill,
  },
  {
    name: "Skype",
    link: "live:.cid.4bff53152f3d85b2",
    Icon: RiSkypeFill,
  }
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`hover:text-accent transition-all duration-300`}
        >
          <social.Icon aria-hidden className="text-2xl"/>
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
