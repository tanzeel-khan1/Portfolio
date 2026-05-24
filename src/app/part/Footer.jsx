import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-main py-12 md:py-14 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
        <div className="space-y-1">
          <p className="font-semibold text-slate-900">Tanzeel Khan</p>
          <p className="text-sm text-slate-500">
          </p>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="mailto:tanzeel0680@gmail.com"
            className="text-slate-400 hover:text-indigo-600 transition-colors p-1"
            aria-label="Email"
          >
            <MdOutlineEmail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/tanzeel-khan-60601b301/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 transition-colors p-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/tanzeel-khan1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-800 transition-colors p-1"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
