import React, { useState } from "react";
import ProjectImageCarousel from "../components/ProjectImageCarousel";

const Projects = () => {
  const projects = [
    {
      naam: "Shopfloor Application",
      description: "Een moderne shopfloor application voor realtime productie monitoring en workflow optimalisatie.",
      technologies: ["React", "NodeJS", "Prisma", "MySQL"],
      images: ["/images/Screenshot from 2025-06-26 23-45-47.png"],
      category: "Web Development",
      year: "2025"
    },
    {
      naam: "PowerBI Predictions",
      description: "Geavanceerde business intelligence oplossing met predictive analytics en real-time dashboards.",
      technologies: ["Python", "PowerBI", "SQL"],
      images: [
        "/images/ceo-dashboard-powerbi-1024x567.webp",
        "/images/powerbi.png"
      ],
      category: "Data Analytics",
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 sm:px-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-20">
      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
        Portfolio
      </div>
      <h2 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
        Onze Projecten
      </h2>
      <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Ontdek een selectie van innovatieve projecten die we hebben gerealiseerd voor onze klanten.
      </p>
    </div>

    <div className="grid gap-20">
      {projects.map((project, i) => (
        <div key={i} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            
            {/* Images */}
            <div className="flex-1 relative">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-center">
                  {project.images.length > 1 ? (
                    <ProjectImageCarousel images={project.images} projectName={project.naam} />
                  ) : (
                    <img src={project.images[0]} alt={project.naam} className="w-full max-w-[600px] aspect-video object-cover rounded-lg" />
                  )}
                </div>
                <div className="absolute top-4 left-4 bg-black/30 text-white text-sm px-4 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl font-bold text-gray-900">
                    {project.naam}
                  </h3>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-base font-medium">
                    {project.year}
                  </span>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Technologieën
                </h4>
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-5 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 rounded-full text-sm font-medium border border-blue-200/50 hover:shadow-md transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2">
                Bekijk Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

const ProjectCard = ({ project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="mb-20">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* Main Image */}
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <img
                src={project.images[activeImageIndex]}
                alt={`${project.naam} afbeelding`}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                {project.category}
              </div>
            </div>

            {/* Thumbnail Navigation if multiple images */}
            {project.images.length > 1 && (
              <div className="flex gap-3 mt-4 justify-center">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-10 rounded overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex ? 'border-blue-500' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-3xl font-bold text-gray-900">{project.naam}</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">{project.year}</span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Technologieën</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 rounded-full text-sm font-medium border border-blue-200/50 hover:shadow-md transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2">
              Bekijk Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
