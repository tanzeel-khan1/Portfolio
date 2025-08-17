"use client";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
const goToAbout = () => {
  router.push("/first");

  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
  Tanzeel
</h1>

<ul className="hidden md:flex items-center space-x-3 font-semibold text-lg gap-7">
  <li className="text-gray-700 hover:text-blue-600 transition">Home</li>
  <li className="text-gray-700 hover:text-blue-600 transition"onClick={goToAbout}>Skill's</li>
  <li className="text-gray-700 hover:text-blue-600 transition">Projects</li>
  <li>
    <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition">Contact</button>
  </li>
</ul>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X size={26} className="text-blue-600" />
              ) : (
                <Menu size={26} className="text-blue-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-3 p-4 font-medium">
            <li className="text-gray-700 hover:text-blue-600 transition">Home</li>
            <li className="text-gray-700 hover:text-blue-600 transition">About</li>
            <li className="text-gray-700 hover:text-blue-600 transition">Projects</li>
            <li>
              <button className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition">Contact</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
