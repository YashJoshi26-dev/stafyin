import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StaggerHeadline from "./StaggerHeadline";
import HeroQuickBar from "./HeroQuickBar";

export default function PageHero({
  eyebrow,
  title,
  highlightWords = [],
  subtitle,
  image,
  ctaLabel,
  ctaTo,
  secondaryLabel,
  secondaryTo,
  showQuickBar = true,
}) {
  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-[560px] overflow-hidden flex items-center justify-center py-28 md:py-32">
        {/* Full-bleed cover image with Ken Burns */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="hero-kenburns w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/90 via-[#0B1730]/55 to-[#0B1730]/25" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-dim/40 via-transparent to-blue-dim/30" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 w-full text-center flex flex-col items-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-wider uppercase text-white/90 border border-white/25 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-bright animate-pulse" />
              {eyebrow}
            </motion.span>
          )}

          <StaggerHeadline
            text={title}
            highlightWords={highlightWords}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mx-auto"
          />

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/85 text-base md:text-lg leading-relaxed mt-6 max-w-xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaLabel || secondaryLabel) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              {ctaLabel && (
                <Link
                  to={ctaTo}
                  className="font-mono text-xs tracking-wider uppercase px-7 py-4 rounded-full glass text-white transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:shadow-glow hover:bg-white/20"
                >
                  {ctaLabel} →
                </Link>
              )}
              {secondaryLabel && (
                <Link
                  to={secondaryTo}
                  className="font-mono text-xs tracking-wider uppercase px-7 py-4 rounded-full border border-white/40 text-white hover:bg-white hover:text-green-dim transition-all duration-[400ms]"
                >
                  {secondaryLabel}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom floating quick-action bar — sits below hero, no overlap */}
      {showQuickBar && <HeroQuickBar />}
    </section>
  );
}
