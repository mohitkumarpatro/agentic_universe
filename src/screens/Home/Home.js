import React from "react";
import { Header } from "../../components/Header";
import { HeroSection } from "./Sections/HeroSection/HeroSection";
import ReimagineWork from "./Sections/ReimagineWork/ReimagineWork";
import ClientThought from "./Sections/ClientThought/ClientThought";
import AgenticPulse from "./Sections/AgenticPulse/AgenticPulse";
import FiveLayers from "./Sections/FiveLayers/FiveLayers";
import EnterpriseCognition from "./Sections/EnterpriseCognition/EnterpriseCognition";
import GraphStats from "./Sections/GraphStats/GraphStats";
import SalesContactSection from "./Sections/SalesContactSection/SalesContactSection";
import EnterpriseIndustries from "./Sections/EnterpriseIndustries/EnterpriseIndustries";
import PlatformCards from "./Sections/PlatformCards/PlatformCards";
import SecurityFeatures from "./Sections/SecurityFeatures/SecurityFeatures";
import LatestReleases from "./Sections/LatestReleases/LatestReleases";
import DownloadBrochureSection from "./Sections/DownloadBrochureSection/DownloadBrochureSection";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header */}
        <Header />
        <HeroSection />
        <ReimagineWork />
        <ClientThought />
        <AgenticPulse />
        <FiveLayers />
        <EnterpriseCognition />
        <GraphStats />
        <SalesContactSection />
        <EnterpriseIndustries />
        <PlatformCards />
        <SecurityFeatures />
        <LatestReleases />
        <DownloadBrochureSection />
        <Footer />
      </div>
    </div>
  );
};
