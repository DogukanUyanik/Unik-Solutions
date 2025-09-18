import React, { useEffect, useState, useRef } from "react";
import { Users, Award, Star, Code, Zap, Shield, Target, Lightbulb, TrendingUp, ChevronRight } from "lucide-react";

// Custom hook for intersection observer (matching Homepage)
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

// Animated counter component (matching Homepage)
function AnimatedCounter({ number, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const isPercentage = number.includes('%');
      const isPlus = number.includes('+');
      
      let targetNumber;
      if (isPercentage) {
        targetNumber = parseFloat(number);
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
    if (number.includes('+')) return `${count}+`;
    return count.toString();
  };

  return <div ref={ref}>{formatNumber()}</div>;
}

function About() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section - Consistent with Homepage */}
      <HeroSection />
      
      {/* Main Features */}
      <MainFeaturesSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Technology Focus */}
      <TechnologyFocusSection />

      {/* Our Approach */}
      <OurApproachSection />

      {/* Final CTA Section - Consistent with Homepage */}
      
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

// Hero Section Component
function HeroSection() {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-32 lg:py-40 text-center" ref={ref}>
      <div className="w-full">
        <div 
          className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            ✨ Innovatie • Kwaliteit • Groei
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Over Ons
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Wij zijn een <span className="font-semibold text-blue-700">jonge, ambitieuze groep</span> van gepassioneerde ontwikkelaars en AI-experts die 
            <span className="font-semibold text-purple-700"> gedreven door innovatie</span> bedrijven helpen groeien met de 
            <span className="font-semibold text-indigo-700"> allernieuwste technologieën</span>. Onze missie is om digitale transformatie 
            toegankelijk, effectief en toekomstbestendig te maken.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Kwaliteit Gegarandeerd</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Cutting-Edge Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Features Section Component
function MainFeaturesSection() {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze Kernwaarden
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek wat ons drijft en hoe wij elke dag het verschil maken
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {mainFeatures.map((item, i) => (
            <div
              key={i}
              className={`group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${i * 0.2}s`
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg mb-6 hover:rotate-12 transition-transform duration-300 animate-float">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex justify-center">
                <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-medium hover:scale-110 transition-transform duration-300">
                  {item.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Our Story Section Component
function OurStorySection() {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ons Verhaal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geboren uit een passie voor technologie en een drang om het verschil te maken
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Als <strong className="text-blue-700">jonge ondernemers</strong> begonnen we met een simpele overtuiging: 
                technologie moet bedrijven vooruit helpen, niet vertragen. We zagen te vaak 
                verouderde systemen die groei remden in plaats van mogelijk maakten.
              </p>
              
              <p>
                Daarom richtten we ons bedrijf op met één doel: <strong className="text-purple-700">de nieuwste technologieën </strong> 
                zoals AI en moderne webontwikkeling toegankelijk maken voor 
                bedrijven van elke grootte. Van startup tot enterprise - wij zorgen voor oplossingen 
                die écht werken.
              </p>
              
              <p>
                Onze <strong className="text-indigo-700">ambitie</strong> reikt verder dan alleen software ontwikkelen. 
                We willen jouw digitale partner zijn - iemand die meedenkt, innoveert en 
                jouw bedrijf naar het volgende niveau tilt.
              </p>
            </div>
          </div>
          
          <div className={`space-y-6 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {storyStats.map((stat, i) => (
              <div key={i} className="flex items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mr-6 shadow-lg animate-float">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter number={stat.value} />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Technology Focus Section Component
function TechnologyFocusSection() {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Allernieuwste Technologieën
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We blijven altijd voorop lopen met de laatste ontwikkelingen in tech en AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFocus.map((tech, i) => (
            <div 
              key={i} 
              className={`group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${i * 0.2}s`
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300 animate-float">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {tech.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tech.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.technologies.map((techItem, j) => (
                  <span key={j} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-300">
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Our Approach Section Component
function OurApproachSection() {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section className="w-full px-6 lg:px-8 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze Aanpak
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kwaliteit staat centraal in alles wat we doen - van eerste gesprek tot eindproduct
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachSteps.map((step, i) => (
            <div 
              key={i} 
              className={`text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${i * 0.2}s`
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto shadow-lg hover:rotate-12 transition-transform duration-300 animate-float">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// Data constants
const mainFeatures = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Samenwerking",
    description: "Wij geloven in nauwe samenwerking met onze klanten om oplossingen op maat te ontwikkelen die écht werken voor jouw specifieke uitdagingen.",
    badge: "Partnership First"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Ervaring",
    description: "Met jarenlange ervaring in softwareontwikkeling, AI en moderne frameworks bouwen wij robuuste en schaalbare applicaties.",
    badge: "Proven Track Record"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Kwaliteit",
    description: "Kwaliteit gegarandeerd - we leveren excellence in alles wat we doen, van ontwerp tot implementatie en doorlopende support.",
    badge: "100% Satisfaction"
  },
];

const storyStats = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "50+",
    label: "Succesvolle Projecten"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "25+",
    label: "Tevreden Klanten"
  },
  {
    icon: <Code className="w-6 h-6" />,
    value: "10+",
    label: "Technologieën"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "99%",
    label: "Project Success Rate"
  }
];

const techFocus = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "AI",
    description: "Geavanceerde AI-oplossingen die jouw bedrijf slimmer maken",
    technologies: ["N8N", "VoiceFlow", "Javascript"]
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Modern Web Development",
    description: "Cutting-edge webapplicaties met de nieuwste frameworks",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"]
  },
  {
  icon: <Shield className="w-6 h-6" />,
  title: "Applicatie Ontwikkeling",
  description: "Robuuste en schaalbare applicaties met Java en Spring Boot",
  technologies: ["Java", "Spring Boot", "JavaFX"]
}

];

const approachSteps = [
  {
    title: "Ontdekken",
    description: "We luisteren naar jouw uitdagingen en doelen om de perfecte oplossing te vinden"
  },
  {
    title: "Ontwikkelen",
    description: "Met agile methodiek bouwen we iteratief jouw oplossing met continue feedback"
  },
  {
    title: "Optimaliseren",
    description: "Na oplevering blijven we optimaliseren en ondersteunen voor maximale impact"
  }
];

export default About;