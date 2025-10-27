// GalleryWidget component
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import galleryImage1 from "@/assets/Rectangle 5160.png";
import galleryImage2 from "@/assets/Rectangle 5160 2.png";
import galleryImage3 from "@/assets/Rectangle 5160 3.png";
import galleryImage4 from "@/assets/Rectangle 5160.png"; // Reusing for more images
import galleryImage5 from "@/assets/Rectangle 5160 2.png"; // Reusing for more images
import galleryImage6 from "@/assets/Rectangle 5160 3.png"; // Reusing for more images

const GalleryWidget = () => {
  const [images, setImages] = useState([galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6]);
  const [startIndex, setStartIndex] = useState(0);

  const handleAddImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImage = event.target?.result as string;
          setImages([...images, newImage]);
          setTimeout(() => {
            if (startIndex + 3 < images.length + 1) {
              setStartIndex(Math.max(0, images.length + 1 - 3));
            }
          }, 100);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleImageClick = (imageUrl: string) => {
    window.open(imageUrl, "_blank");
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 3 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <div className="relative w-full h-[316px] rounded-xl border border-[#374151] bg-[#363C43] shadow-[0_4px_6px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Left-side icons */}
      <div className="absolute top-[30px] left-[8px] w-[24px] h-[24px]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="qmGradientGallery" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A4E54" />
              <stop offset="100%" stopColor="#A3ADBA" />
            </linearGradient>
          </defs>
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="url(#qmGradientGallery)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9a3 3 0 1 1 6 0c0 2-3 2.5-3 4"
            stroke="url(#qmGradientGallery)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="17" r="1" fill="url(#qmGradientGallery)" />
        </svg>
      </div>

      {/* 6-box symbol */}
      <div className="absolute top-[150px] left-[8px] w-[24px] h-[30.69px] grid grid-cols-2 grid-rows-3 gap-[1.38px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="bg-[#4A4E54] rounded-[2.33px]" />
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between pl-[56px] pr-6 pt-6">
        <span className="inline-flex items-center justify-center w-[149px] h-[62px] rounded-[20px] bg-[#171717] text-[#ffffff] text-[20px] font-medium shadow-[inset_0_4px_10px_rgba(0,0,0,0.25)]">
          Gallery
        </span>

        <div className="flex items-center gap-3">
          {/* Add Image Button */}
          <Button
            variant="glass"
            size="sm"
            onClick={handleAddImage}
            className="gap-2 rounded-[23px] h-[48px] w-[132px] px-4 text-[14px] font-medium text-white bg-gradient-to-br from-[#6F787C] to-[#161718] shadow-[0_6px_24px_rgba(0,0,0,0.35)] hover:brightness-110 transition-all duration-200"
          >
            <Plus className="w-4 h-4 text-white" />
            ADD IMAGE
          </Button>

          {/* Left Arrow */}
          <Button
            variant="glass"
            size="icon"
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className="group rounded-full h-[45px] w-[45px] text-white bg-[#2B2F33] shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:scale-105 hover:bg-gradient-blue-hover hover:shadow-mac-glass disabled:opacity-50 disabled:hover:scale-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5"
                stroke="#6F787C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-white"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="#6F787C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-white"
              />
            </svg>
          </Button>

          {/* Right Arrow */}
          <Button
            variant="glass"
            size="icon"
            onClick={handleNext}
            disabled={startIndex + 3 >= images.length}
            className="group rounded-full h-[45px] w-[45px] text-white bg-[#2B2F33] shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:scale-105 hover:bg-gradient-blue-hover hover:shadow-mac-glass disabled:opacity-50 disabled:hover:scale-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19"
                stroke="#6F787C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-white"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="#6F787C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-white"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="pl-[56px] pr-6 pb-10 mt-6">
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 flex-1 relative">
            {visibleImages.map((img, idx) => (
              <div
                key={startIndex + idx}
                className="relative flex-1 aspect-square rounded-2xl overflow-visible group cursor-pointer transition-all duration-300"
                onClick={() => handleImageClick(img)}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)] group-hover:scale-[1.08] group-hover:z-20">
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.15] grayscale group-hover:grayscale-0 group-hover:brightness-110"
                  />
                </div>
              </div>
            ))}

            {/* Placeholder boxes */}
            {visibleImages.length < 3 &&
              Array.from({ length: 3 - visibleImages.length }).map((_, idx) => (
                <div
                  key={`empty-${idx}`}
                  className="flex-1 aspect-square rounded-2xl bg-secondary/20 border border-dashed border-border/30"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;