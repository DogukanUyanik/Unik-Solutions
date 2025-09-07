import ComputerFrame from "./ComputerFrame";
import { ChevronRight } from "lucide-react";
import { useIntersectionObserver } from "@/lib/hooks";
import { Link } from "react-router-dom";

export default function ComputerFrameSection() {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      imageSrc: "/images/powerbi.png",
      title: "PowerBI Predictions Dashboard",
      altText: "PowerBI Predictions Dashboard showing analytics",
      technologies: ["Python", "PowerBI", "SQL"],
      heading: "Krachtige Analytics in Actie",
      description:
        "Ontdek hoe onze geavanceerde business intelligence oplossing met predictive analytics en real-time dashboards uw bedrijfsdata transformeert in waardevolle inzichten. Met machine learning algoritmes voorspellen we trends en patronen die cruciaal zijn voor strategische besluitvorming.",
    },
    {
      imageSrc: "/images/Screenshot from 2025-06-26 23-45-47.png",
      title: "Custom Web Application",
      altText: "Modern web application interface",
      technologies: ["React", "Node.js", "TypeScript"],
      heading: "Moderne Webapplicaties",
      description:
        "Ervaar de kracht van onze op maat gemaakte webapplicaties die gebouwd zijn met de nieuwste technologieën. Van responsive design tot schaalbare architectuur, wij creëren digitale ervaringen die gebruikers inspireren en bedrijfsprocessen optimaliseren.",
    },
  ];

  return (
    <section className="w-full px-6 lg:px-8 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze Projecten in Actie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk hoe wij innovatieve oplossingen tot leven brengen voor onze klanten
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 0.3}s`,
              }}
            >
              {/* Computer Frame */}
              <div className="flex-1 flex justify-center">
                <ComputerFrame
                  imageSrc={project.imageSrc}
                  title={project.title}
                  altText={project.altText}
                  technologies={project.technologies}
                />
              </div>

              {/* Description */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {project.heading}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-medium rounded-full hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link to="/projects">
                  <button className="mt-6 group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Meer Details
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
