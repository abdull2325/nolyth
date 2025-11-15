import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: number;
}

export function LazyImage({ src, alt, className = "", aspectRatio = 16/9 }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-black/5 ${className}`}
      style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
    >
      {isInView && (
        <>
          {/* Loading skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-r from-black/5 via-black/10 to-black/5 animate-pulse" />
            </div>
          )}

          {/* Actual image */}
          <motion.img
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </>
      )}
    </div>
  );
}
