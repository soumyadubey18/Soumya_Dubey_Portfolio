import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer name="footer" className="w-full bg-[#3E2723] text-white py-16 border-t border-[#2D1B18]">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#C5A059] inline-block pb-1">Let's Connect</h2>
          <p className="text-[#D7CCC8] max-w-sm mx-auto md:mx-0 leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/soumya-dubey-752aa8185/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#FAF9F6] text-[#3E2723] rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/soumyadubey18"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#FAF9F6] text-[#3E2723] rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#FAF9F6] text-[#3E2723] rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#FAF9F6] text-[#3E2723] rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg"
              title="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="flex-1 w-full md:w-auto text-center md:text-right">
          <div className="bg-[#4E342E] p-8 rounded-2xl border border-[#5D4037] shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-[#C5A059]">Based in</h3>
            <p className="text-[#D7CCC8] mb-6 font-medium">Ranchi, Jharkhand, India</p>
            <p className="text-sm opacity-80 italic text-[#BCAAA4]">"Turning ideas into scalable digital realities."</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-16 pt-8 border-t border-[#4E342E] text-center px-4">
        <p className="text-[#8D6E63] text-sm font-medium">
          © {new Date().getFullYear()} <span className="text-[#C5A059] font-bold tracking-wider uppercase">SOUMYA DUBEY</span>. All rights reserved.
        </p>
        <p className="text-xs text-[#6D4C41] mt-2 font-light">Crafted with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
