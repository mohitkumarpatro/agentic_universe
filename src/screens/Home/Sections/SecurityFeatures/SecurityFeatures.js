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
      <h3 className="text-sm text-gray-500 mb-2">Trust & Security</h3>
      <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-2">
        Enterprise-Grade Trust.
      </h2>
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-12 underline decoration-2 decoration-black">
        Autonomous-Ready Security.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="rounded-full border border-blue-200 shadow-md w-20 h-20 flex flex-col items-center justify-center text-xs font-semibold text-gray-700 mb-4">
              <span className="text-gray-500">{feature.label}</span>
              <span className="text-black text-sm">{feature.badge}</span>
              <span className="text-gray-500">Certificate</span>
            </div>
            <h4 className="font-semibold text-lg">{feature.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityFeatures;
