import { useEffect, lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { HeroRevamped } from "./components/hero";
import { EnhancedCursor } from "./components/EnhancedCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { PageLoader } from "./components/PageLoader";
import { SkipToContent } from "./components/SkipToContent";
import { SectionIndicator } from "./components/SectionIndicator";
import { BackToTop } from "./components/BackToTop";
import { KeyboardShortcuts } from "./components/KeyboardShortcuts";
import { ShortcutsMenu } from "./components/ShortcutsMenu";
import { CommandPalette } from "./components/CommandPalette";
import { CursorTrail } from "./components/CursorTrail";
import { EasterEgg } from "./components/EasterEgg";
import { FloatingMenu } from "./components/FloatingMenu";
import { Toaster } from "./components/ui/sonner";
import { SectionSkeleton } from "./components/SectionSkeleton";

// Lazy load heavy components
const HorizontalProjects = lazy(() => import("./components/HorizontalProjects").then(m => ({ default: m.HorizontalProjects })));
const InteractiveGrid = lazy(() => import("./components/InteractiveGrid").then(m => ({ default: m.InteractiveGrid })));
const BentoGrid = lazy(() => import("./components/BentoGrid").then(m => ({ default: m.BentoGrid })));
const CTABreak = lazy(() => import("./components/CTABreak").then(m => ({ default: m.CTABreak })));
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const TechStack = lazy(() => import("./components/TechStack").then(m => ({ default: m.TechStack })));
const ProcessTimeline = lazy(() => import("./components/ProcessTimeline").then(m => ({ default: m.ProcessTimeline })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const Team = lazy(() => import("./components/Team").then(m => ({ default: m.default })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  // Set custom favicon and page title
  useEffect(() => {
    // Set page title
    document.title = "Nolyth | AI & Software Innovation";

    // Create custom SVG favicon with black "N" on white
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect width="64" height="64" fill="#ffffff" rx="12"/>
        <text x="32" y="48" font-family="Arial, sans-serif" font-size="42" font-weight="600" fill="#000000" text-anchor="middle">N</text>
      </svg>
    `;

    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
      document.head.appendChild(newFavicon);
    }
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Preload critical resources
  useEffect(() => {
    // Preconnect to image CDNs
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://images.unsplash.com';
    document.head.appendChild(preconnect);
  }, []);

  return (
    <>
      {/* UX Enhancements */}
      <PageLoader />
      <ScrollProgress />
      <SkipToContent />
      <EnhancedCursor />
      <CursorTrail />
      <SectionIndicator />
      <BackToTop />
      <KeyboardShortcuts />
      <ShortcutsMenu />
      <CommandPalette />
      <FloatingMenu />
      <EasterEgg />
      <Toaster position="bottom-right" />
      
      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#f5f1eb', color: '#0a0a0a' }}>
        <Navbar />
        <main>
          <HeroRevamped />
          <Suspense fallback={<SectionSkeleton />}>
            {/* Featured Projects - Horizontal scroll showcase */}
            <HorizontalProjects />
            
            {/* What We Do - Interactive capabilities grid */}
            <InteractiveGrid />
            
            {/* Why Choose Us - Value propositions & stats */}
            <BentoGrid />
            
            {/* Technology Stack - Tools & frameworks */}
            <TechStack />
            
            {/* Our Process - How we work */}
            <ProcessTimeline />
            
            {/* Social Proof - Client testimonials */}
            <Testimonials />
            
            {/* Meet the Team */}
            <Team />
            
            {/* Our Story - Mission & values */}
            <About />
            
            {/* Mid-journey CTA */}
            <CTABreak 
              title="Ready to innovate?"
              description="Let's discuss how AI can transform your business. Schedule a free consultation."
              buttonText="Start Your Project"
              theme="dark"
            />
            
            {/* Contact Form */}
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
