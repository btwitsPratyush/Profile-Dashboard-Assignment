// ProfileWidget component
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, LayoutGrid } from "lucide-react";

type TabType = "about" | "experiences" | "recommended";

const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  const tabContent = `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`;

  // Split into paragraphs to insert the one-line divider after the first paragraph
  const paragraphs = tabContent.split("\n\n");

  // ProfileWidget component
  return (
    <div className="relative w-full h-[316px] rounded-xl border border-[#374151] bg-[#363C43] shadow-[0_4px_6px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Vertical gradient line (8x64) - moved further right and down */}
      <div 
        className="absolute top-[120px] right-[12px] w-[8px] h-[64px] rounded"
        style={{
          background: 'linear-gradient(180deg, #888989 0%, #4A4E54 100%)'
        }}
      />

      {/* Left-side icons (exact offsets) */}
        <div className="absolute top-[30px] left-[8px] w-[24px] h-[24px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="qmGradientProfile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A4E54" />
                <stop offset="100%" stopColor="#A3ADBA" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" stroke="url(#qmGradientProfile)" strokeWidth="2" />
            <path d="M9 9a3 3 0 1 1 6 0c0 2-3 2.5-3 4" stroke="url(#qmGradientProfile)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="17" r="1" fill="url(#qmGradientProfile)" />
          </svg>
        </div>
        {/* 6-box symbol (2×3 grid) */}
        <div className="absolute top-[150px] left-[8px] w-[24px] h-[30.69px] grid grid-cols-2 grid-rows-3 gap-[1.38px]">
          {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="bg-[#4A4E54] rounded-[2.33px]" />
        ))}
      </div>

      {/* Tabs (black frame behind tabs) */}
      <div className="pl-[56px] pr-6 pt-6">
        <div className="flex gap-2 bg-[#000000] rounded-xl p-2 shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
          <Button
            variant="tab"
            size="default"
            data-active={activeTab === "about"}
            onClick={() => setActiveTab("about")}
            className={`flex-1 rounded-xl px-6 py-3 text-[16px] font-medium transition-all duration-200 ${
              activeTab === "about"
                ? "bg-[#0f0f0f] text-[#ffffff]"
                : "bg-transparent text-[#9ca3af] hover:bg-[#0f0f0f] hover:text-[#ffffff]"
            }`}
          >
            About Me
          </Button>
          <Button
            variant="tab"
            size="default"
            data-active={activeTab === "experiences"}
            onClick={() => setActiveTab("experiences")}
            className={`flex-1 rounded-xl px-6 py-3 text-[16px] font-medium transition-all duration-200 ${
              activeTab === "experiences"
                ? "bg-[#0f0f0f] text-[#ffffff]"
                : "bg-transparent text-[#9ca3af] hover:bg-[#0f0f0f] hover:text-[#ffffff]"
            }`}
          >
            Experiences
          </Button>
          <Button
            variant="tab"
            size="default"
            data-active={activeTab === "recommended"}
            onClick={() => setActiveTab("recommended")}
            className={`flex-1 rounded-xl px-6 py-3 text-[16px] font-medium transition-all duration-200 ${
              activeTab === "recommended"
                ? "bg-[#0f0f0f] text-[#ffffff]"
                : "bg-transparent text-[#9ca3af] hover:bg-[#0f0f0f] hover:text-[#ffffff]"
            }`}
          >
            Recommended
          </Button>
        </div>
      </div>

      {/* Content (aligned with tabs) */}
      <div className="px-6 pb-6 mt-6">
        <div className="bg-[#363C43] rounded-lg p-6 min-h-[200px]">
          <div className="space-y-4">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-[14px] font-normal leading-relaxed text-[#969696]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWidget;