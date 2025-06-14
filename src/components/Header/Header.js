import React, { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Stories", href: "#stories" },
    { label: "Solutions", href: "#solutions", hasDropdown: true },
    { label: "Products", href: "#products", hasDropdown: true },
    { label: "Company", href: "#company" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/95">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[20px] 
             bg-gradient-to-r from-[#00c2d1] to-[#4dd0e1] 
             rounded-full blur-2xl opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex justify-center items-center space-x-24">
            <div className="flex items-center">
              <div className="relative w-[24px] h-[24px] bg-gradient-to-tr from-[#00C2D1] to-[#2684FF] rounded-full mr-3">
                {/* Thin half-rounded arc at bottom */}
                <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[15px] h-[9px] border-b-2 border-white rounded-b-full"></div>
              </div>

              <span className="text-[20px] font-medium text-[#080808]">
                Agentic Universe
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center text-[16px] text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-[16px] w-[16px]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </a>
                </div>
              ))}
            </nav>
          </div>
          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-gray-900 text-[16px] font-500">
              Contact
            </button>
            <button className="w-full bg-gradient-to-r from-[#00C2D1] to-[#2684FF] hover:opacity-90 text-white py-2 rounded-full transition duration-300 px-4 text-[16px] font-500">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <button className="w-full text-left text-gray-700 hover:text-gray-900">
                  Contact
                </button>
                <button className="w-full bg-gradient-to-r from-[#2684FF] to-[#00C2D1] hover:opacity-90 text-white py-2 rounded-full transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
