import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Althea AI",
    subtitle: "Medical Call Representative",
    description: "AI-powered appointment scheduling with patient verification and natural language understanding",
    year: "2024",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=90",
    fullDescription: "Althea AI revolutionizes medical office operations by providing an intelligent virtual call representative that handles appointment scheduling, patient verification, and natural language queries with human-like understanding.",
    challenge: "Medical offices struggled with high call volumes, appointment scheduling errors, and patient verification processes that consumed valuable staff time and led to missed appointments.",
    solution: "We developed a sophisticated AI system using advanced NLP and conversational AI that integrates with existing practice management systems, handles complex medical terminology, and provides HIPAA-compliant patient interactions.",
    technologies: ["OpenAI GPT-4", "Python", "FastAPI", "PostgreSQL", "Twilio", "WebSocket", "Docker"],
    duration: "4 months",
    teamSize: "5 engineers",
    metrics: [
      { label: "Call Handling", value: "95%" },
      { label: "Accuracy", value: "98%" },
      { label: "Time Saved", value: "60hrs/week" }
    ],
    results: [
      "Reduced appointment scheduling errors by 85%",
      "Freed up 60+ hours per week of staff time",
      "Improved patient satisfaction scores by 40%",
      "Handled 500+ calls per day automatically"
    ]
  },
  {
    title: "Unlimit",
    subtitle: "Cashierless Shopping",
    description: "Multi-camera tracking system with ReID technology enabling grab-and-go retail experiences",
    year: "2024",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=1600&q=90",
    fullDescription: "Unlimit transforms traditional retail with an autonomous checkout-free shopping experience powered by advanced computer vision and person re-identification technology across multiple camera feeds.",
    challenge: "Traditional checkout processes create friction in the customer journey, leading to long queues, abandoned purchases, and high operational costs for retailers.",
    solution: "We engineered a sophisticated multi-camera tracking system using state-of-the-art ReID algorithms that accurately tracks shoppers and their selections throughout the store, automatically charging them upon exit.",
    technologies: ["YOLOv8", "DeepSORT", "PyTorch", "OpenCV", "Redis", "Kafka", "NVIDIA Triton", "Kubernetes"],
    duration: "8 months",
    teamSize: "8 engineers",
    metrics: [
      { label: "Tracking Accuracy", value: "99.2%" },
      { label: "Checkout Time", value: "0 sec" },
      { label: "Customer Throughput", value: "+300%" }
    ],
    results: [
      "Eliminated checkout wait times completely",
      "Increased customer throughput by 300%",
      "Reduced operational costs by 40%",
      "Achieved 99.2% accuracy in product detection",
      "Processed 10,000+ transactions per month"
    ]
  },
  {
    title: "Allah-u-Allam",
    subtitle: "Islamic Knowledge System",
    description: "Hierarchical RAG integrating 96+ religious texts with fine-tuned Ollama 70B model",
    year: "2024",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1600&q=90",
    fullDescription: "Allah-u-Allam is a comprehensive Islamic knowledge system that provides accurate, contextual answers to religious questions by leveraging a vast corpus of authenticated Islamic texts and modern AI technology.",
    challenge: "Muslims worldwide needed reliable access to authenticated Islamic knowledge, but traditional search methods couldn't understand context or provide nuanced answers from multiple authoritative sources.",
    solution: "We built a sophisticated RAG system with hierarchical document chunking and a fine-tuned Ollama 70B model that understands Arabic and Islamic concepts, providing accurate answers with proper citations.",
    technologies: ["Ollama 70B", "LangChain", "ChromaDB", "FastAPI", "Next.js", "Arabic NLP", "Docker"],
    duration: "6 months",
    teamSize: "6 engineers",
    metrics: [
      { label: "Religious Texts", value: "96+" },
      { label: "Query Accuracy", value: "94%" },
      { label: "Daily Users", value: "15K+" }
    ],
    results: [
      "Integrated 96+ authenticated Islamic texts",
      "Achieved 94% accuracy in religious Q&A",
      "Serving 15,000+ daily active users",
      "Reduced response time to under 2 seconds",
      "Provided citations for every answer"
    ]
  },
  {
    title: "Genesys",
    subtitle: "Multi-Agent Platform",
    description: "Business intelligence with C-level AI agents orchestrated by autonomous COO",
    year: "2024",
    category: "Multi-Agent AI",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=90",
    fullDescription: "Genesys represents the future of business intelligence with autonomous AI agents that simulate C-level executives, working in concert to provide strategic insights and operational recommendations.",
    challenge: "Small and medium businesses lack access to experienced C-level executives for strategic guidance, limiting their growth potential and decision-making capabilities.",
    solution: "We created a multi-agent AI system where specialized agents (CFO, CMO, CTO, etc.) collaborate under an autonomous COO to analyze business data and provide executive-level strategic recommendations.",
    technologies: ["GPT-4", "AutoGen", "LangGraph", "Python", "PostgreSQL", "React", "D3.js", "AWS"],
    duration: "10 months",
    teamSize: "10 engineers",
    metrics: [
      { label: "AI Agents", value: "7" },
      { label: "Decision Support", value: "92%" },
      { label: "Cost vs Hiring", value: "-95%" }
    ],
    results: [
      "Developed 7 specialized C-level AI agents",
      "Provided strategic recommendations with 92% approval rate",
      "Reduced need for external consultants by 80%",
      "Analyzed 1M+ data points per business monthly",
      "95% more cost-effective than hiring executives"
    ]
  },
];

export function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasScrolledDownRef = useRef(false);
  
  const scrollX = useMotionValue(0);
  const smoothScrollX = useSpring(scrollX, {
    damping: 25,
    stiffness: 80,
    mass: 0.5,
  });

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const maxScroll = (projects.length - 1) * (typeof window !== 'undefined' ? window.innerWidth : 1920);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollDirection: 'up' | 'down' = 'down';
    
    const checkEntryDirection = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        scrollDirection = 'down';
      } else if (currentScrollY < lastScrollY) {
        scrollDirection = 'up';
      }
      lastScrollY = currentScrollY;
      
      const isEnteringFromTop = rect.top < window.innerHeight && rect.top > 0 && scrollDirection === 'down';
      const isEnteringFromBottom = rect.bottom > 0 && rect.bottom < window.innerHeight && scrollDirection === 'up';
      
      if (!hasInitialized && (isEnteringFromTop || isEnteringFromBottom)) {
        scrollX.jump(0);
        
        if (scrollDirection === 'down') {
          hasScrolledDownRef.current = true;
        } else {
          hasScrolledDownRef.current = false;
        }
        
        setHasInitialized(true);
      }
      
      const isCompletelyOutOfView = rect.bottom < -50 || rect.top > window.innerHeight + 50;
      if (isCompletelyOutOfView && hasInitialized) {
        setHasInitialized(false);
        setIsSticky(false);
        hasScrolledDownRef.current = false;
      }
    };

    window.addEventListener("scroll", checkEntryDirection, { passive: true });
    checkEntryDirection();
    
    return () => {
      window.removeEventListener("scroll", checkEntryDirection);
    };
  }, [hasInitialized, maxScroll, scrollX]);

  useEffect(() => {
    if (isSticky) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isSticky]);

  useEffect(() => {
    let ticking = false;
    let accumulatedDelta = 0;
    let exitAccumulatedDelta = 0;
    const EXIT_THRESHOLD = 25;

    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const isAtTop = rect.top <= 0;
      const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!hasScrolledDownRef.current) {
        if (e.deltaY > 0 && isInViewport) {
          hasScrolledDownRef.current = true;
        } else {
          setIsSticky(false);
          return;
        }
      }

      if (isAtTop && isInViewport) {
        const currentX = Math.abs(scrollX.get());
        const isAtStart = currentX <= 0;
        const isAtEnd = currentX >= maxScroll - 1;

        if (isAtStart && e.deltaY < 0) {
          if (e.deltaY < 0) {
            exitAccumulatedDelta += Math.abs(e.deltaY);
            if (exitAccumulatedDelta >= EXIT_THRESHOLD) {
              setIsSticky(false);
              exitAccumulatedDelta = 0;
              return;
            }
          } else {
            exitAccumulatedDelta = 0;
          }
          
          e.preventDefault();
          e.stopPropagation();
          return;
        } else {
          exitAccumulatedDelta = 0;
        }

        if (isAtEnd && e.deltaY > 0) {
          exitAccumulatedDelta += e.deltaY;
          
          if (exitAccumulatedDelta >= EXIT_THRESHOLD) {
            setIsSticky(false);
            exitAccumulatedDelta = 0;
            return;
          }
          
          e.preventDefault();
          e.stopPropagation();
          return;
        } else if (e.deltaY < 0) {
          exitAccumulatedDelta = 0;
        }

        e.preventDefault();
        e.stopPropagation();
        setIsSticky(true);

        accumulatedDelta += e.deltaY;

        if (!ticking) {
          requestAnimationFrame(() => {
            const newX = Math.max(0, Math.min(maxScroll, currentX + accumulatedDelta * 1.5));
            scrollX.set(-newX);
            
            accumulatedDelta = 0;
            ticking = false;
          });
          ticking = true;
        }
      } else {
        setIsSticky(false);
        exitAccumulatedDelta = 0;
      }
    };

    const preventScroll = (e: Event) => {
      if (isSticky) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("scroll", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("scroll", preventScroll);
    };
  }, [scrollX, maxScroll, isSticky]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative min-h-screen"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section Header */}
        <div className="absolute top-20 md:top-24 lg:top-32 left-6 md:left-12 lg:left-24 z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="w-12 md:w-16 h-px bg-black/10" />
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                Selected Work
              </span>
            </div>
            <h2 className="text-black text-5xl md:text-7xl lg:text-9xl">Projects</h2>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 right-8 z-20 hidden lg:flex items-center gap-2 text-black/30 text-sm pointer-events-none"
        >
          <span className="tracking-wide">Scroll horizontally</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Horizontal Container */}
        <div className="absolute inset-0 flex items-center">
          <motion.div 
            className="flex h-full items-center" 
            style={{ x: smoothScrollX }}
          >
            {projects.map((project, index) => (
              <ProjectSlide 
                key={index} 
                project={project} 
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

function ProjectSlide({ 
  project, 
  index,
  onClick 
}: { 
  project: typeof projects[0]; 
  index: number;
  onClick: () => void;
}) {
  return (
    <div 
      className="project-slide relative flex-shrink-0 h-screen cursor-pointer group"
      style={{ width: '100vw' }}
      onClick={onClick}
    >
      <div className="relative h-full overflow-hidden" style={{ backgroundColor: '#f5f1eb' }}>
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
        </motion.div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-20">
          <div className="max-w-[1800px] mx-auto w-full">
            {/* Category & Year */}
            <motion.div
              className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(245, 241, 235, 0.8)' }}>
                {project.category}
              </span>
              <span className="text-xs text-black/40 font-medium">{project.year}</span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-black mb-6 md:mb-8 tracking-[-0.02em] leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {project.title}
            </motion.h3>

            {/* Subtitle & Description */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <p className="text-lg md:text-xl text-black/70 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-black/50 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-3 text-black/70 group-hover:text-black transition-colors duration-500 backdrop-blur-sm px-6 py-3 rounded-full"
              style={{ backgroundColor: 'rgba(245, 241, 235, 0.8)' }}
            >
              <span className="text-sm tracking-wide font-medium">View Project</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
