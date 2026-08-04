import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import SEO from "../components/SEO";
import { Sparkles, Gauge, Building2, Link2, Target } from "lucide-react";

const VALUES = [
  { icon: Sparkles, title: "AI Precision", desc: "Every match is scored, not guessed." },
  { icon: Gauge, title: "Radical Efficiency", desc: "Friction removed from every step of delivery." },
  { icon: Building2, title: "Architectural Excellence", desc: "Talent that matches the maturity of your stack." },
  { icon: Target, title: "Delivery Alignment", desc: "Milestones treated as commitments, not estimates." },
  { icon: Link2, title: "Frictionless Integration", desc: "Teams that plug in without disrupting velocity." },
];

const STATS = [
  { value: 4.2, suffix: "x", decimals: 1, label: "Faster onboarding" },
  { value: 30, suffix: "+", decimals: 0, label: "Global talent hubs" },
  { value: 98, suffix: "%", decimals: 0, label: "Match precision" },
  { value: 6, suffix: "", decimals: 0, label: "Core industries" },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us — AI-First Digital Enablement"
        description="Stafyin redefines IT staffing with AI-enabled talent optimization, deep technical vetting, and global delivery infrastructure built for enterprise scale."
        path="/about"
      />
      <Breadcrumbs label="About" path="/about" />
      <PageHero
        eyebrow="About Stafyin"
        title="The Intelligent Evolution of IT Staffing Solutions"
        highlightWords={["IT", "Staffing", "Solutions"]}
        subtitle="At Stafyin we redefine how enterprises scale. We are a premium, AI-first digital enablement company delivering high-end, result-oriented staffing solutions built for the modern economy."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&fm=webp&w=1920&q=80"
      />

      {/* INTRO BODY */}
      <ScrollReveal className="max-w-4xl mx-auto px-6 lg:px-10 py-24 block">
        <p className="text-inkdim text-base leading-relaxed">
          We understand that sustainable growth requires agility, which is why
          we provide elite contingent labour tailored to meet short and
          long-term IT objectives. By replacing traditional recruitment
          bottlenecks with a highly sophisticated, data-driven approach, we
          bridge the gap between complex digital roadmaps and flawless
          execution. Whether you need an elite team of frontend architects to
          scale your user experience or specialized engineering squads to
          drive core modernization, we ensure your technical infrastructure is
          built for scale.
        </p>
      </ScrollReveal>

      {/* THE ADVANTAGE */}
      <section className="border-t border-line bg-panel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <SectionHeading eyebrow="The Advantage" title="AI-Enabled Talent & Optimization" />
            <p className="text-inkdim leading-relaxed mt-5">
              We don't just match resumes to job descriptions; we optimize
              human capital. Our proprietary, AI-enabled talent platform
              evaluates deep technical competency, architectural aptitude, and
              delivery velocity with absolute precision.
            </p>
            <p className="text-inkdim leading-relaxed mt-4">
              Through continuous talent optimization, we ensure every engineer
              deployed matches the exact maturity level of your stack,
              drastically compressing onboarding time, eliminating friction,
              and unlocking unprecedented project delivery ease.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08} className={i % 2 === 1 ? "mt-8" : ""}>
                <div className="card-lift rounded-2xl border border-line bg-void p-6 hover:border-blue/40">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals}
                    className="font-display text-3xl text-blue font-bold"
                  />
                  <p className="text-inkdim text-xs font-mono mt-2 uppercase tracking-wider">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-6">
        <ScrollReveal>
          <div className="card-lift rounded-3xl border border-line bg-panel p-9 h-full hover:border-green/40">
            <p className="eyebrow mb-4">Mission</p>
            <p className="font-display text-xl text-ink leading-relaxed">
              To engineer the future of work by connecting global enterprises
              with AI-enabled talent, transforming contingent labour into a
              strategic engine for frictionless project delivery, cost
              optimization, and long-term IT excellence.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="card-lift rounded-3xl border border-line bg-panel p-9 h-full hover:border-blue/40">
            <p className="eyebrow mb-4">Vision</p>
            <p className="font-display text-xl text-ink leading-relaxed">
              To be the global gold standard for AI-first digital enablement,
              rewriting the rules of IT staffing by turning contingent labour
              into the ultimate strategic catalyst for enterprise innovation and
              architectural excellence.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CORE VALUES */}
      <section className="border-t border-line bg-panel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <SectionHeading eyebrow="What Drives Us" title="Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.06}>
                <div className="group card-lift rounded-2xl border border-line bg-void p-6 h-full hover:border-green/40">
                  <div className="w-10 h-10 rounded-xl bg-green/[0.08] border border-green/20 flex items-center justify-center transition-transform duration-[400ms] group-hover:rotate-6 group-hover:scale-110">
                    <v.icon size={18} className="text-green" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink mt-4">{v.title}</h3>
                  <p className="text-inkdim text-xs leading-relaxed mt-2">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner with an intelligent workforce architect."
        subtitle="Let's talk about your next technical hire — contingent, permanent, or executive."
      />
    </Layout>
  );
}
