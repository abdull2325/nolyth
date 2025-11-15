import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { toast } from "sonner@2.0.3";

// Morphing contact geometry
function ContactGeometry({ delay }: { delay: number }) {
  const [morphIndex, setMorphIndex] = useState(0);
  
  const shapes = [
    "M 50,15 L 85,50 L 50,85 L 15,50 Z", // Diamond
    "M 50,15 L 75,35 L 75,65 L 50,85 L 25,65 L 25,35 Z", // Hexagon
    "M 50,20 Q 80,20 80,50 Q 80,80 50,80 Q 20,80 20,50 Q 20,20 50,20 Z", // Circle
  ];

  useState(() => {
    const interval = setInterval(() => {
      setMorphIndex((prev) => (prev + 1) % shapes.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.12, scale: 1 }}
      transition={{ delay, duration: 1 }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.path
          d={shapes[morphIndex]}
          fill="none"
          stroke="rgba(0, 0, 0, 0.4)"
          strokeWidth="2"
          animate={{ d: shapes[morphIndex] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}

// Particle orbit
function ContactParticle({ radius, delay }: { radius: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-black/25"
      animate={{
        x: [
          Math.cos(0) * radius,
          Math.cos(Math.PI) * radius,
          Math.cos(Math.PI * 2) * radius,
        ],
        y: [
          Math.sin(0) * radius,
          Math.sin(Math.PI) * radius,
          Math.sin(Math.PI * 2) * radius,
        ],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
    } else {
      setErrors({ ...errors, email: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <section ref={containerRef} id="contact" className="py-80 px-6 md:px-12 lg:px-24 bg-[#fafaf9] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large morphing geometry */}
        <motion.div
          className="absolute right-1/4 top-1/4 opacity-8"
          style={{ y, rotate }}
        >
          <ContactGeometry delay={0} />
        </motion.div>

        {/* Triangle cluster */}
        <motion.div
          className="absolute left-1/3 bottom-1/3"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <polygon
              points="75,25 125,100 25,100"
              fill="none"
              stroke="rgba(0, 0, 0, 0.08)"
              strokeWidth="2"
            />
            <polygon
              points="75,45 105,85 45,85"
              fill="none"
              stroke="rgba(0, 0, 0, 0.05)"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>

        {/* Orbiting particles */}
        <div className="absolute left-1/2 top-1/2">
          <ContactParticle radius={200} delay={0} />
          <ContactParticle radius={250} delay={2} />
        </div>

        {/* Neural connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <motion.line
            x1="20%"
            y1="30%"
            x2="80%"
            y2="70%"
            stroke="rgba(0,0,0,0.4)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line
            x1="30%"
            y1="80%"
            x2="70%"
            y2="20%"
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="flex items-center gap-6 mb-8">
              <motion.div 
                className="relative w-16 h-px bg-black/15"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Diamond marker */}
                <motion.div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-black/25"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </motion.div>
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                Get In Touch
              </span>
            </div>

            <h2 className="text-black mb-16">
              Let's Create
            </h2>
            
            <p className="text-2xl text-black/50 mb-24 leading-relaxed">
              Have a project in mind? We'd love to architect it with you.
            </p>

            {/* Contact Info with geometric accents */}
            <div className="space-y-12">
              {[
                { label: "Email", value: "contact@nolyth.dev", href: "mailto:contact@nolyth.dev" },
                { label: "Availability", value: "Open for new projects" },
                { label: "Response Time", value: "Within 24 hours" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="relative border-l border-black/15 pl-10 group"
                >
                  {/* Triangle marker */}
                  <motion.div 
                    className="absolute -left-1.5 top-0 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: [0, 120, 240, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 12 12">
                      <polygon points="6,1 11,11 1,11" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    </svg>
                  </motion.div>
                  
                  <div className="text-xs text-black/40 tracking-wide mb-3">{item.label}</div>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-xl text-black hover:text-black/60 transition-colors duration-500"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-xl text-black/50">{item.value}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center relative">
                  {/* Success geometry animation */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 1 }}
                  >
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <polygon
                        points="60,20 100,60 60,100 20,60"
                        fill="none"
                        stroke="rgba(0,0,0,0.1)"
                        strokeWidth="2"
                      />
                    </svg>
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 rounded-full bg-black mx-auto mb-8 flex items-center justify-center relative z-10"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl mb-2 text-black">Message Sent</h3>
                  <p className="text-black/50">We'll be in touch soon</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Name */}
                <div className="relative group">
                  <label className="block text-xs tracking-wider uppercase text-black/40 mb-3 transition-colors duration-300 group-focus-within:text-black/60">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full bg-transparent border-b border-black/10 focus:border-black/30 py-3 text-lg text-black placeholder:text-black/20 focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focused === "name" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Geometric focus indicator */}
                  <motion.div
                    className="absolute -right-4 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: focused === "name" ? 0.3 : 0,
                      scale: focused === "name" ? 1 : 0,
                      rotate: focused === "name" ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <polygon points="8,2 14,8 8,14 2,8" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
                    </svg>
                  </motion.div>
                </div>

                {/* Email */}
                <div className="relative group">
                  <label className="block text-xs tracking-wider uppercase text-black/40 mb-3 transition-colors duration-300 group-focus-within:text-black/60">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) {
                        setErrors({ ...errors, email: "" });
                      }
                    }}
                    onFocus={() => setFocused("email")}
                    onBlur={() => {
                      setFocused(null);
                      handleEmailBlur();
                    }}
                    required
                    className="w-full bg-transparent border-b border-black/10 focus:border-black/30 py-3 text-lg text-black placeholder:text-black/20 focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focused === "email" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -right-4 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: focused === "email" ? 0.3 : 0,
                      scale: focused === "email" ? 1 : 0,
                      rotate: focused === "email" ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <polygon points="8,2 14,8 8,14 2,8" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
                    </svg>
                  </motion.div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-sm mt-2"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div className="relative group">
                  <label className="block text-xs tracking-wider uppercase text-black/40 mb-3 transition-colors duration-300 group-focus-within:text-black/60">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-black/10 focus:border-black/30 py-3 text-lg text-black placeholder:text-black/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focused === "message" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -right-4 top-8"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: focused === "message" ? 0.3 : 0,
                      scale: focused === "message" ? 1 : 0,
                      rotate: focused === "message" ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <polygon points="8,2 14,8 8,14 2,8" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
                    </svg>
                  </motion.div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-12 py-5 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Geometric hover effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                      <polygon points="50,20 80,50 50,80 20,50" fill="white" />
                    </svg>
                  </motion.div>
                  
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
