import { useState } from "react";
import Img1 from "./Images/Frame.png";
import Img2 from "./Images/Frame (1).png";

const DownloadBrochureSection = () => {
  const [selectedBrochure, setSelectedBrochure] = useState("AnHuman Brochure");

  const handleDownload = () => {
    // Replace this with your real brochure link logic
    const link = document.createElement("a");
    link.href = "/path-to-your-brochure.pdf"; // Replace with actual file URL
    link.download = selectedBrochure;
    link.click();
  };

  return (
    <div className="text-center py-20 px-4  backdrop-blur-sm bg-white/95">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[50px] 
             bg-gradient-to-r from-[#00c2d1] to-[#4dd0e1] 
             rounded-full blur-2xl opacity-70"
      />
      <p className="text-[16px] text-gray-400 mb-5 text-center">
        Download Collaterals
      </p>
      <h2 className="text-3xl md:text-[56px] font-500 mb-8 leading-tight text-gray-800">
        Download a brochure to learn
        <br />
        more about{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          AnHuman
          <br />
          capabilities.
        </span>
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <select
          value={selectedBrochure}
          onChange={(e) => setSelectedBrochure(e.target.value)}
          className="px-6 py-3 rounded-full border border-gray-300 text-black shadow-sm w-72 focus:outline-none"
        >
          <option>AnHuman Brochure</option>
          <option>Vision Brochure</option>
          <option>Enterprise Overview</option>
        </select>

        <button
          onClick={handleDownload}
          className="flex items-center justify-start gap-2 px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-[16px]"
        >
          <div className="p-1 rounded-full bg-white">
            <img
              src={Img2} // Make sure this is your correct path or use an inline SVG
              alt="Download"
              className="w-5 h-5" // 20x20 pixels
            />
          </div>
          Download File
        </button>
      </div>
    </div>
  );
};

export default DownloadBrochureSection;
