import {useState} from "react";
import logo from "../../assets/logo.svg";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

interface MenuProps {
  isMenuOpen: boolean;
  handleOpen: () => void;
}

interface Link {
  id: number;
  name: string;
  href: string;
}

const links = [
  {
    id: 1,
    name: "Dribble",
    href: "https://www.dribble.com",
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://www.twitter.com",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com",
  },
];

const pages = [
  {
    id: 1,
    name: "Art",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const handleOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <TopNav
          isMenuOpen={isMenuOpen}
          handleOpen={handleOpen}
        />
        {isMenuOpen && (
          <NavModal handleOpen={handleOpen} />
        )}
      </div>
      <div className="hidden md:block">
        <SideNav />
      </div>
    </>
  );
};

const TopNav = ({
  isMenuOpen,
  handleOpen,
}: MenuProps) => {
  return (
    <div className="flex h-[10vh] items-center justify-between border-y-[1px] border-black fixed w-full bg-white">
      <div className="w-20 h-20 border-r-[1px] border-black flex justify-center items-center">
        <img
          src={logo}
          alt="Logo"
          className="p-2 animate-spin select-none"
        />
      </div>
      <div className="text-4xl font-Playfair ml-4 select-none">
        AiArt
      </div>
      <div className="w-8 h-8 mr-4 ">
        {isMenuOpen ? (
          <XMarkIcon onClick={handleOpen} />
        ) : (
          <Bars3Icon onClick={handleOpen} />
        )}
      </div>
    </div>
  );
};

interface NavModalProps {
  handleOpen: () => void;
}

const NavModal = ({
  handleOpen,
}: NavModalProps) => {
  return (
    <div className="h-[90vh] top-[10vh] z-20 fixed bg-white">
      <div className="mx-4 pt-5 h-[90vh] flex flex-col">
        <h1 className="text-2xl">
          A simple yet visually pleaseing
          portfolio template filled with AI
          generated paintings.
        </h1>

        <nav className="my-10 text-7xl font-Playfair">
          <ul>
            {pages.map((page) => (
              <li
                key={page.id}
                className="mt-7 cursor-pointer"
              >
                <Link
                  to={page.link}
                  onClick={handleOpen}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-full justify-around text-xl font-semibold mt-20 ">
          {links.map((link) => (
            <a href={link.href} key={link.id}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="absolute mt-10 text-md bottom-4 font">
          <div>
            <a
              href="https://maciejlezak.com"
              target="_blank"
            >
              Created by Maciej Łężak
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SideNav = () => {
  return (
    <>
      <div className="w-[300px]"></div>
      <div className="w-[300px] h-[100vh] flex border-r-[1px] border-dashed border-black fixed top-0 left-0 z-10 ">
        <div className="m-4">
          <div className="w-20 h-20 flex justify-center items-center border-[1px] border-black ">
            <img
              src={logo}
              alt="Logo image"
              className="p-2 animate-spin"
            />
          </div>
          <div className="text-5xl mt-7 font-Playfair">
            AiArt
          </div>
          <div className="text-md mt-2">
            A simple yet visually pleaseing
            portfolio template filled with AI
            generated paintings.
          </div>
          <div className="flex w-full justify-between mt-7 text-xl font-semibold ">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.id}
                target="_blank"
              >
                {link.name}
              </a>
            ))}
          </div>
          <nav className="mt-10 text-xl">
            <ul>
              {pages.map((page) => (
                <li
                  key={page.id}
                  className={`py-1 border-t-[1px] border-black border-dashed ${
                    page.id === 3 &&
                    `border-b-[1px]`
                  } cursor-pointer`}
                >
                  <Link to={page.link}>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-10 text-xl font">
            <div className=" text-2xl mb-2 font-semibold">
              Awards:
            </div>
            <div>Brush Whisperer</div>
            <div>Stroke Award</div>
            <div>
              Extraordinaire impressionniste
            </div>
          </div>
          <div className="absolute mt-10 text-md bottom-4 font">
            <div>
              <a
                href="https://maciejlezak.com"
                target="_blank"
              >
                Created by Maciej Łężak
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
