import React, { useState } from "react";

const ProjectImageCarousel = ({ images, projectName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length);
  const prevImage = () => setActiveIndex((activeIndex - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-[600px]">
      <img
        src={images[activeIndex]}
        alt={`${projectName} afbeelding ${activeIndex + 1}`}
        className="w-full aspect-video object-cover rounded-lg"
      />
      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
