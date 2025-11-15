import { motion, useInView, useAnimation } from "motion/react";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Marcus Chen",
    role: "Lead AI Consultant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "Amira Hassan",
    role: "Automation Specialist",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
  },
  {
    name: "David Park",
    role: "Implementation Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    name: "Elena Martinez",
    role: "Client Success Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
];

export default function Team() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto relative">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Label with refined typography */}
        <motion.p
          className="text-xs tracking-[0.3em] uppercase mb-12 text-black/40"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Meet the team
        </motion.p>

        {/* Header Section - Refined Two Column */}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 lg:gap-24 mb-20">
          {/* Left: Dramatic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="leading-[1.1] tracking-tight">
              <span className="text-black/95">You're in </span>
              <span className="text-black/30 italic">experienced</span>
              <span className="text-black/95"> hands.</span>
            </h2>
          </motion.div>

          {/* Right: Elegant Description */}
          <motion.div
            className="flex items-end lg:items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-black/50 leading-[1.7] tracking-wide">
              No layers of management. You work directly with the specialists
              who understand your business and build your automation{" "}
              <span className="text-black/80">from start to finish.</span>
            </p>
          </motion.div>
        </div>

        {/* Team Cards Grid - Sophisticated Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.9,
                delay: 0.8 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Card Container with Multi-layer Shadow */}
              <motion.div
                className="relative overflow-hidden rounded-[2rem] aspect-[3/4] bg-black/5"
                style={{
                  boxShadow: `
                    0 1px 2px rgba(0, 0, 0, 0.06),
                    0 2px 4px rgba(0, 0, 0, 0.04),
                    0 4px 8px rgba(0, 0, 0, 0.02)
                  `,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                {/* Subtle border */}
                <div className="absolute inset-0 rounded-[2rem] border border-black/[0.08] z-10 pointer-events-none" />

                {/* Image with parallax effect */}
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Sophisticated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/0 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Vignette effect */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/40" />
                </div>

                {/* Text Content with refined spacing */}
                <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.12, duration: 0.6 }}
                  >
                    {/* Role Badge */}
                    <div className="mb-3 inline-block">
                      <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/60 border border-white/10">
                        {member.role}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-white tracking-tight mb-0">
                      {member.name}
                    </h3>
                  </motion.div>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-white/60"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-8 h-[1px] bg-white/40" />
                    <span className="text-xs tracking-wider">View profile</span>
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 120%, rgba(255,255,255,0.1) 0%, transparent 60%)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Elevated Design */}
        <motion.div
          className="relative mt-32 pt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            {/* Left: Refined Text */}
            <div className="flex-1 max-w-2xl">
              <motion.h3
                className="mb-4 text-black/90 tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Want to be part of the team?
              </motion.h3>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-xs tracking-wide text-black/70 border border-black/5">
                    3 vacancies available
                  </span>
                </div>
                <p className="text-black/50 leading-[1.8] tracking-wide">
                  We're always on the lookout for talented people who want to
                  help businesses cut through AI uncertainty and build systems
                  that work.
                </p>
              </motion.div>
            </div>

            {/* Right: Magnetic Button */}
            <motion.button
              className="group relative px-10 py-5 bg-black text-white rounded-full overflow-hidden flex items-center gap-4 whitespace-nowrap shadow-lg shadow-black/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{
                duration: 0.6,
                delay: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tracking-wide">Apply now</span>

              {/* Animated arrow */}
              <motion.div
                className="relative"
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </motion.div>

              {/* Sophisticated hover shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
