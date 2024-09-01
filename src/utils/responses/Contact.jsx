import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const links = [
    {
      name: "Email",
      link: "alikillerno@gmail.com",
      icon: <MdEmail />,
    },
    {
      name: "Github",
      link: "https://github.com/Ali-Raza764",
      icon: <FaGithub />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/@razamindset",
      icon: <FaInstagram />,
    },
  ];
  return (
    <div className="block">
      {links.map((link) => (
        <div className="flex  items-center">
          <div className="flex items-center mr-3">
            {link.name} {link.icon}:
          </div>
          <a
            href={link.link}
            className="flex items-center gap-4 text-yellow-400 underline"
            target="_blank"
          >
            {link.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contact;
