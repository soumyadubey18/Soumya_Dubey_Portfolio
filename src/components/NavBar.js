import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "home",
    },
    {
      id: 2,
      name: "The Story",
      link: "about",
    },
    {
      id: 3,
      name: "Works",
      link: "project",
    },
    {
      id: 4,
      name: "Career",
      link: "experience",
    },
    {
      id: 5,
      name: "Technical Skills",
      link: "skills",
    },
    {
      id: 6,
      name: "Contact",
      link: "contact",
    },
     {
      id: 7,
      name: "Footer",
      link: "Footer",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[#C5A059] bg-[#FAF9F6] border-b border-[#EADBC8] fixed z-50">
      <div>
        <h1 className="body-font font-name text-5xl ml-2 font-bold text-[#3E2723]">Soumya Dubey</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-[#5D4037] hover:text-[#C5A059] hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[#3E2723] md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#FAF9F6] text-[#3E2723]">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-[#C5A059] transition-colors duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
