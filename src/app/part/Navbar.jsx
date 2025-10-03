"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false); 
  const router = useRouter();

  useEffect(() => setMounted(true), []); 

  const goToSkills = () => router.push("/first");

  if (!mounted) return null; 

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center h-16">
            <h1
              className="text-2xl font-bold text-blue-600 cursor-pointer ml-6 md:ml-24 mt-3"
              onClick={() => router.push("/")}
            >
              Tanzeel
            </h1>

            <ul className="hidden md:flex items-center space-x-3 font-semibold text-lg gap-7">
              <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li
                className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
                onClick={goToSkills}
              >
                Skill's
              </li>
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X size={26} className="text-blue-600 cursor-pointer" />
                ) : (
                  <Menu size={26} className="text-blue-600 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-8">
            <ul className="flex flex-col space-y-3 p-4 font-medium">
              <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li
                className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  goToSkills();
                }}
              >
                Skill's
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowModal(true);
                  }}
                  className="bg-blue-600 cursor-pointer mt-2 text-white w-full py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-blue-600 cursor-pointer">
              Contact Me
            </h2>
            <p className="text-gray-700 flex items-center justify-center gap-2">
              <MdOutlineEmail className="text-blue-600" /> Email: tanzeel0680@gmail.com
            </p>
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
