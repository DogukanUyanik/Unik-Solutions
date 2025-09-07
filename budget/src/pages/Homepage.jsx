import React, { useEffect, useState, useRef } from "react";
import { ChevronRight, Code, Brain, Zap, Shield, Users, Award, ArrowUp, Star, Play, Menu, X } from "lucide-react";
import ComputerFrameSection from "../components/ComputerFrameSection";

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

// Animated counter component
function AnimatedCounter({ number, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const isPercentage = number.includes('%');
      const isTime = number.includes('/');
      const isPlus = number.includes('+');
      
      let targetNumber;
      if (isPercentage) {
        targetNumber = parseFloat(number);
      } else if (isTime) {
        targetNumber = 24; // For 24/7
      } else if (isPlus) {
        targetNumber = parseInt(number);
      } else {
        targetNumber = parseInt(number) || 0;
      }

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * targetNumber);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, hasStarted, number, duration]);

  const formatNumber = () => {
    if (number.includes('%')) return `${count}%`;
    if (number.includes('/')) return `${count}/7`;
    if (number.includes('+')) return `${count}+`;
    return count.toString();
  };

  return <div ref={ref}>{formatNumber()}</div>;
}


// Dual Computer Frame Section Component
function ComputerFrameSection222() {
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
        "Ervaar de kracht van onze op maat gemaakte webapplicaties die zijn gebouwd met de nieuwste technologieën. Van responsive design tot schaalbare architectuur, wij creëren digitale ervaringen die gebruikers inspireren en bedrijfsprocessen optimaliseren.",
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

                <Link href="/projects" passHref>
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
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

// Homepage Component
function Homepage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: "100%", label: "Tevreden Klanten" },
    { number: "99.9%", label: "Uptime Garantie" },
    { number: "24/7", label: "Support" },
    { number: "50+", label: "Projecten" }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Persoonlijke Aanpak",
      description: "Elk project krijgt onze volledige aandacht met dedicated teamleden"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Snelle Oplevering",
      description: "Agile development voor snelle resultaten en continue feedback"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Toekomstbestendig",
      description: "Moderne architectuur die meegroeit met uw bedrijf"
    }
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Professionele Webontwikkeling",
      description: "Moderne websites en webapps met focus op snelheid, gebruiksvriendelijkheid en conversie. Wij bouwen in React, Node.js, en andere moderne frameworks.",
      features: ["Responsive Design", "SEO Geoptimaliseerd", "Lightning Fast", "Mobile-First"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Schaalbare Softwareontwikkeling",
      description: "Van idee tot oplevering: wij ontwikkelen robuuste desktop-oplossingen op maat, afgestemd op jouw processen.",
      features: ["Custom Solutions", "Scalable Architecture", "Cross-platform", "Agile Development"]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Voorspellende Analyse met AI",
      description: "Zet data om in waardevolle inzichten. Ontvang voorspellingen en trends dankzij machine learning modellen en datavisualisatie.",
      features: ["Real-time Analytics", "Predictive Models", "Data Visualization", "Business Intelligence"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Machine Learning Modellen",
      description: "Wij bouwen slimme algoritmes die processen automatiseren, klantgedrag voorspellen en efficiëntie verhogen.",
      features: ["Deep Learning", "NLP Processing", "Computer Vision", "AutoML"]
    }
  ];

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="w-full px-6 lg:px-8 py-32 lg:py-40 text-center">
            <div className="w-full">
              <div 
                className="animate-fadeInUp"
                style={{ 
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  opacity: 0,
                  transform: 'translateY(30px)'
                }}
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  🚀 Innovatieve IT-Oplossingen
                </span>
              </div>
              
              <div 
                className="animate-fadeInUp"
                style={{ 
                  animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
                  opacity: 0,
                  transform: 'translateY(30px)'
                }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
                  Jouw partner in moderne IT-oplossingen
                </h1>
              </div>
              
              <div 
                className="animate-fadeInUp"
                style={{ 
                  animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
                  opacity: 0,
                  transform: 'translateY(30px)'
                }}
              >
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Wij bouwen schaalbare software en slimme AI-modellen voor ambitieuze bedrijven die de toekomst willen vormgeven.
                </p>
              </div>
              
              <div 
                className="animate-fadeInUp"
                style={{ 
                  animation: 'fadeInUp 0.8s ease-out 0.6s forwards',
                  opacity: 0,
                  transform: 'translateY(30px)'
                }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="/contact
                  ">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Vraag een gratis consult aan
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                </div>
              </div>
            </div>
          </section>
          
          <ComputerFrameSection />

          {/* Stats Section */}
          <StatsSection stats={stats} />

          {/* Services Section */}
          <ServicesSection services={services} />

          {/* Why Choose Us Section */}
          <WhyChooseUsSection whyChooseUs={whyChooseUs} />

          {/* Final CTA Section */}
          <FinalCTASection />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Stats Section Component
function StatsSection({ stats }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-16" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'animate-scaleIn' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isVisible ? `scaleIn 0.6s ease-out ${index * 0.1}s forwards` : 'none'
              }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                <AnimatedCounter number={stat.number} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection({ services }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-20" ref={ref}>
      <div className="w-full">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Van concept tot implementatie, wij leveren cutting-edge oplossingen die uw bedrijf vooruit helpen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3 animate-float">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section Component
function WhyChooseUsSection({ whyChooseUs }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Waarom Kiezen Voor Ons?
          </h2>
          <p className="text-xl text-gray-600">
            Ontdek wat ons onderscheidt in de IT-wereld
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg mb-6 hover:rotate-12 transition-transform duration-300 animate-float">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section Component
function FinalCTASection() {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`relative p-12 md:p-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl shadow-2xl text-center text-white overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Klaar om je IT naar een hoger niveau te tillen?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Laten we samen bouwen aan de toekomst van jouw bedrijf met innovatieve technologie
            </p>
          <div className="flex justify-center">
  <a
    href="/contact"
    className="group inline-flex bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 items-center gap-2 hover:bg-gray-50"
  >
    Neem vandaag nog contact op
    <ArrowUp className="w-5 h-5 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
  </a>
</div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;