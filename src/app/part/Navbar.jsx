"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = isOpen || showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, showModal]);

  if (!mounted) return null;

  const goToSkills = () => {
    setIsOpen(false);
    router.push("/first");
  };

  const goToProjects = () => {
    setIsOpen(false);
    router.push("/project");
  };

  const linkClass =
    "text-slate-600 hover:text-indigo-600 text-[15px] font-medium transition-colors";

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="container-main flex justify-between items-center h-20">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-xl font-bold text-slate-900 tracking-tight cursor-pointer"
          >
            Tanzeel<span className="text-indigo-600">.</span>
          </button>

          <ul className="hidden md:flex items-center gap-10">
            <li>
              <Link href="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <button type="button" onClick={goToSkills} className={`${linkClass} cursor-pointer`}>
                Skills
              </button>
            </li>
            <li>
              <button type="button" onClick={goToProjects} className={`${linkClass} cursor-pointer`}>
                Projects
              </button>
            </li>
            <li className="pl-2">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn-primary !py-2.5 !px-5 !text-sm cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <ul className="container-main py-6 flex flex-col gap-2">
              <li>
                <Link href="/" className={`block py-3 ${linkClass}`} onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <button type="button" className={`block w-full text-left py-3 ${linkClass} cursor-pointer`} onClick={goToSkills}>
                  Skills
                </button>
              </li>
              <li>
                <button type="button" className={`block w-full text-left py-3 ${linkClass} cursor-pointer`} onClick={goToProjects}>
                  Projects
                </button>
              </li>
              <li className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setShowModal(true);
                  }}
                  className="btn-primary w-full cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {showModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
          role="presentation"
        >
          <div
            className="card-surface w-full max-w-md p-8 sm:p-10"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Get in touch</h2>
            <p className="text-slate-500 text-sm mb-8">I&apos;d love to hear from you.</p>

            <div className="space-y-3">
              <a
                href="mailto:tanzeel0680@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-colors"
              >
                <MdOutlineEmail className="text-indigo-600 shrink-0" size={22} />
                <span className="text-sm font-medium text-slate-700 break-all">
                  tanzeel0680@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/tanzeel-khan-60601b301/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-colors"
              >
                <FaLinkedin className="text-indigo-600 shrink-0" size={22} />
                <span className="text-sm font-medium text-slate-700">LinkedIn</span>
              </a>
             
            </div>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="btn-secondary w-full mt-8 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
