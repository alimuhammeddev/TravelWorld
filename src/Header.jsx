import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { logo } from './assets';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Tours", href: "#" },
    { name: "Login", href: "#" },
    { name: "Register", href: "#", isButton: true },
  ];

  return (
    <section className="fixed top-0 left-0 right-0 bg-white shadow-sm w-full z-50 p-2">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 max-w-7xl">

        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="" className="w-36" />
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link, idx) =>
            link.isButton ? (
              <a
                key={idx}
                href={link.href}
                className="bg-[#FAA935] text-white px-4 py-1 rounded-full hover:bg-[#e6992d] transition-colors font-medium text-[15px]"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={idx}
                href={link.href}
                className="text-[#0B2727] hover:text-[#FAA935] transition-colors font-medium text-[15px]"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
 
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            {links.map((link, idx) =>
              link.isButton ? (
                <a
                  key={idx}
                  href={link.href}
                  className="bg-[#FAA935] text-white px-4 py-2 rounded-lg hover:bg-[#e6992d] transition-colors font-medium text-center"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[#0B2727] hover:text-[#FAA935] transition-colors font-medium"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </section>
  );
};

export default Header;