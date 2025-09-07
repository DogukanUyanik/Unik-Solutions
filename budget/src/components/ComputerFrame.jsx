// src/components/ComputerFrame.jsx

export default function ComputerFrame({ imageSrc, title, altText }) {
  return (
    <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-gray-300 bg-white/60 backdrop-blur-md shadow-2xl">
      {/* MacOS-style top bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-300">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <p className="ml-4 text-gray-600 text-sm truncate">{title}</p>
      </div>

      {/* Project Image */}
      <div className="relative aspect-video w-full">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
