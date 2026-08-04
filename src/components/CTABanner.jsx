import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function CTABanner({
  title = "Scale your technical capability, not your overhead.",
  subtitle = "Talk to our delivery team about your next contingent, permanent, or executive search.",
  buttonLabel = "Start a Search",
  buttonTo = "/contact",
}) {
  return (
    <section className="relative py-24 px-6 lg:px-10 overflow-hidden bg-green-dim">
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue/25 blur-[130px] rounded-full" />
      <ScrollReveal className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
          {title}
        </h2>
        <p className="text-white/75 text-base md:text-lg mt-5 max-w-xl mx-auto">{subtitle}</p>
        <Link
          to={buttonTo}
          className="inline-block mt-9 font-mono text-xs tracking-wider uppercase px-8 py-4 rounded-full glass text-white transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:bg-white/20 hover:shadow-glow"
        >
          {buttonLabel} →
        </Link>
      </ScrollReveal>
    </section>
  );
}
