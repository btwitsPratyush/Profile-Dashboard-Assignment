import ProfileWidget from "@/components/ProfileWidget";
import GalleryWidget from "@/components/GalleryWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark md:h-screen flex items-start justify-start p-8 md:p-12">
      <div className="w-full flex gap-8">
        {/* Left Half — visible container */}
        <div
          className="hidden md:block w-[836px] h-[690px] rounded-3xl flex-shrink-0"
          style={{
            backgroundColor: "#616161D1",
            border: "1px solid #96BEE7",
          }}
        />

        {/* Right Half — widgets container */}
        <div className="w-full md:w-auto flex flex-col items-start justify-start space-y-[25px]">
          {/* Profile Widget */}
          <ProfileWidget />

          {/* Divider line between ProfileWidget and GalleryWidget */}
          <div
            className="w-[480px] h-[3px] rounded-full mx-auto"
            style={{ backgroundColor: "#282828" }}
          />

          {/* Gallery Widget */}
          <GalleryWidget />

          {/* Divider line below GalleryWidget */}
          <div
            className="w-[480px] h-[3px] rounded-full mx-auto -mt-2"
            style={{ backgroundColor: "#282828" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;