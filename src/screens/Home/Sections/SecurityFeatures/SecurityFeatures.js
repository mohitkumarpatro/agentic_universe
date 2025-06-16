import React from "react";

const features = [
  {
    title: "AES-256 Encryption",
    description: "End-to-end protection of data in transit and at rest",
    badge: "AES256",
    label: "Encryption",
  },
  {
    title: "TLS 1.2+ Secure Channeling",
    description: "Industry-standard, zero-trust communications",
    badge: "TLS 1.2+",
    label: "Encrypted",
  },
  {
    title: "PII/PHI Masking Engine",
    description: "Protects sensitive data at every AI interaction point",
    badge: "PII/PHI",
    label: "Protection",
  },
  {
    title: "Regular VAPT Audits",
    description: "End-to-end protection of data in transit and at rest",
    badge: "VAPT",
    label: "Protection",
  },
  {
    title: "Built on OWASP Secure Code Protocols",
    description: "Industry-standard, zero-trust communications",
    badge: "OWASP",
    label: "Secure",
  },
  {
    title: "Compliant with Global Frameworks",
    description: "GDPR, HIPAA, PDPDP, SOC2 Type 2, ISO 27001",
    badge: "Global",
    label: "Compliant",
  },
];

const SecurityFeatures = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-24 text-center">
      <p className="text-[16px] text-gray-400 mb-1 text-center">
        Trust & Security
      </p>
      <span className="bg-gradient-to-r from-[#00C2D1] to-[#2684FF] bg-clip-text text-transparent font-500 text-[48px]">
        Enterprise-Grade Trust.
      </span>
      <br />
      <span className=" text-black  font-500 text-[48px]">
        Autonomous-Ready Security.
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 max-w-7xl mx-auto mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="rounded-full p-[2px] bg-gradient-to-r from-[#00C2D1] to-[#2684FF] w-20 h-20 shadow-md mb-4">
              <div className="rounded-full bg-white w-full h-full flex flex-col items-center justify-center text-xs font-semibold text-gray-700">
                <span className="text-gray-500 text-[8px]">
                  {feature.label}
                </span>

                <div className="flex flex-col items-center w-full px-1">
                  {/* Top line */}
                  <div className="w-full h-px bg-gray-300 mb-1" />

                  {/* Text */}
                  <span className="text-black text-[13.5px] whitespace-nowrap">
                    {feature.badge}
                  </span>

                  {/* Bottom line */}
                  <div className="w-full h-px bg-gray-300 mt-1" />
                </div>

                <span className="text-gray-500 text-[8px]">Certificate</span>
              </div>
            </div>

            <h4 className="font-500 text-[18px]  mt-2">{feature.title}</h4>
            <p className="text-[14px] text-black text-opacity-60 mt-1">
              {feature.description.split(" ").slice(0, 4).join(" ")}
              <br />
              {feature.description.split(" ").slice(4).join(" ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityFeatures;
