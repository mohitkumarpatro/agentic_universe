const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6 relative overflow-hidden">
      {/* Background Text for Style */}
      <div className="absolute bottom-0 left-0 text-[20vw] text-black opacity-10 font-500 z-0">
        Agentic Universe
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10 text-[18px] mb-20">
        {/* Logo */}
        <div className="flex items-start gap-2">
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-1"></div>
          <span className="font-semibold text-white text-base">
            AgenticUniverse
          </span>
        </div>

        {/* Navigation */}
        <div>
          <p className=" uppercase mb-2 text-[#898683]">Navigation</p>
          <ul className="space-y-2 text-[14px]">
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Success Stories</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-gray-400 uppercase mb-2">Legal Stuff</p>
          <ul className="space-y-2 text-[14px]">
            <li>
              <a href="#">Terms and Condition</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-gray-400 uppercase mb-2">Get in Touch</p>
          <ul className="space-y-2 text-[14px]">
            <li>
              <a href="tel:+919591805291">+91 9591805291</a>
            </li>
            <li>
              <a href="mailto:admin@formi.co.in">admin@formi.co.in</a>
            </li>
            <li>Karnataka, India</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="text-gray-400 uppercase mb-2">Socials</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="border border-gray-700 p-2 rounded-full hover:bg-cyan-600 transition"
            >
              {/* <FaEnvelope /> */}
            </a>
            <a
              href="#"
              className="border border-gray-700 p-2 rounded-full hover:bg-cyan-600 transition"
            >
              {/* <FaTwitter /> */}
            </a>
            <a
              href="#"
              className="border border-gray-700 p-2 rounded-full hover:bg-cyan-600 transition"
            >
              {/* <FaMedium /> */}
            </a>
            <a
              href="#"
              className="border border-gray-700 p-2 rounded-full hover:bg-cyan-600 transition"
            >
              {/* <FaLinkedin /> */}
            </a>
          </div>
        </div>
      </div>

      <div className="flex text-[200px] font-bold overflow-hidden">
        {/* Part 1: Always visible */}
        <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent opacity-10 hover:opacity-100 transition-opacity duration-500 delay-200">
          Age
        </span>

        {/* Part 2: Initially hidden, appears on hover */}
        <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent">
          nti
        </span>

        {/* Part 3: Initially hidden */}
        <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent">
          c Un
        </span>

        {/* Part 4: Initially hidden */}
        <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent opacity-10 hover:opacity-100 transition-opacity duration-500 delay-400">
          iverse
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-4 text-xs text-center text-gray-400 flex flex-col md:flex-row justify-between px-6 max-w-full mx-auto">
        <p>@2025 AnHuman Inc.</p>
        <p>
          Design by{" "}
          <a href="#" className="underline">
            Mark91 Studio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
