import { useState } from "react";

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
    <div className="text-center py-20 px-4 bg-gradient-to-br from-cyan-50 via-white to-blue-100">
      <p className="text-gray-500 text-sm mb-2">Download Collaterals</p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight text-gray-800">
        Download a brochure to learn
        <br />
        more about{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          AnHuman capabilities.
        </span>
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <select
          value={selectedBrochure}
          onChange={(e) => setSelectedBrochure(e.target.value)}
          className="px-6 py-3 rounded-full border border-gray-300 text-black shadow-sm w-72"
        >
          <option>AnHuman Brochure</option>
          <option>Vision Brochure</option>
          <option>Enterprise Overview</option>
        </select>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
        >
          Download File
        </button>
      </div>
    </div>
  );
};

export default DownloadBrochureSection;
