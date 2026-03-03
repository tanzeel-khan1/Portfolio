"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const goToSkills = () => {
    setIsOpen(false);
    router.push("/first");
  };

  const goToProjects = () => {
    setIsOpen(false);
    router.push("/project");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center h-16">
            
            {/* LOGO */}
            <h1
              className="text-2xl font-bold text-blue-600 cursor-pointer ml-1 md:ml-12"
              onClick={() => router.push("/")}
            >
              Tanzeel
            </h1>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-8 font-semibold text-lg">
              <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
                <Link href="/">Home</Link>
              </li>

              <li
                className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
                onClick={goToSkills}
              >
                Skills
              </li>

              <li
                className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
                onClick={goToProjects}
              >
                Projects
              </li>

              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* MOBILE ICON */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {isOpen ? (
                  <X size={26} className="text-blue-600" />
                ) : (
                  <Menu size={26} className="text-blue-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6">
            <ul className="flex flex-col space-y-4 font-medium">
              <li
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={goToSkills}
              >
                Skills
              </li>

              <li
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={goToProjects}
              >
                Projects
              </li>

              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowModal(true);
                  }}
                  className="bg-blue-600 cursor-pointer text-white w-full py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* CONTACT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">
              Contact Me
            </h2>

            <p className="text-gray-700 flex items-center justify-center gap-2 mb-3">
              <MdOutlineEmail className="text-blue-600" />
              tanzeel0680@gmail.com
            </p>

            <p className="text-gray-700 flex items-center justify-center gap-2 mb-3">
              <FaLinkedin className="text-blue-700" />
              <a
                href="https://www.linkedin.com/in/tanzeel-khan-60601b301/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </p>

            <p className="text-gray-700 flex items-center justify-center gap-2 mb-5">
              <FaGithub className="text-gray-800" />
              <a
                href="https://github.com/tanzeel-khan1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;