import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Globe2, TrendingDown, Rocket } from "lucide-react";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import StaggerHeadline from "../components/StaggerHeadline";
import AnimatedCounter from "../components/AnimatedCounter";
import HeroQuickBar from "../components/HeroQuickBar";
import SEO from "../components/SEO";

const SERVICES = [
  { title: "Contingent Staffing", desc: "Pre-vetted technical squads deployed for short-term sprints, migrations, and niche project execution.", tag: "Flexible" },
  { title: "Permanent Staffing", desc: "Elite digital professionals with the cultural fit and architectural maturity to lead long-term roadmaps.", tag: "Enduring" },
  { title: "Executive Search", desc: "Discreet C-suite and VP-level placements for enterprises navigating AI-first transformation.", tag: "Confidential" },
  { title: "RPO", desc: "End-to-end recruitment infrastructure embedded directly into your enterprise talent ecosystem.", tag: "End-to-end" },
];

const USPS = [
  { icon: Zap, title: "AI-Enabled Talent Optimization", desc: "Deep competency and delivery-velocity matching, precision-scored before a resume ever reaches you." },
  { icon: TrendingDown, title: "Significant Cost Reduction", desc: "Intelligent sourcing and compliant global frameworks strip overhead from every engineering hire." },
  { icon: Rocket, title: "Accelerated Deliveries", desc: "Talent that integrates into your workflow on day one — no ramp friction, no missed milestones." },
  { icon: Globe2, title: "Frictionless Global Infrastructure", desc: "Established legal entities across strategic hubs enable rapid onshore, nearshore, and offshore scale." },
];

const INDUSTRIES = ["BFSI", "Retail & E-Commerce", "Healthcare", "IT / ITES", "Pharma & Clinical Research", "Public Sector"];
const LOGOS = ["NORTHBRIDGE", "VELOCOR", "ARDENT SYS", "PRIME CAPITAL", "MERIDIAN", "OAKFIELD TECH"];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="AI-First IT Staffing Solutions for Global Enterprises"
        description="Stafyin delivers AI-enabled contingent, permanent, executive search, and RPO staffing solutions for enterprises scaling technical capability without scaling overhead."
        path="/"
      />
      {/* ============ HERO — full viewport, cover bg, Ken Burns, stagger headline, glass CTA ============ */}
      <section className="relative w-full">
        <div className="relative w-full min-h-[680px] overflow-hidden flex items-center justify-center py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&fm=webp&w=1920&q=80"
              alt="AI-driven enterprise technology"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              className="hero-kenburns w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/95 via-[#0B1730]/60 to-[#0B1730]/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-dim/50 via-transparent to-blue-dim/40" />
          </div>

          <div className="relative max-w-5xl mx-auto px-6 lg:px-10 w-full text-center flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-wider uppercase text-white/90 border border-white/25 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-bright animate-pulse" />
              Engineering Talent · v2.4
            </motion.span>

            <StaggerHeadline
              text="The Intelligent Evolution of IT Staffing Solutions"
              highlightWords={["IT", "Staffing", "Solutions"]}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight mx-auto"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-white/85 text-base md:text-lg leading-relaxed mt-6 max-w-lg mx-auto"
            >
              A premium, AI-first digital enablement company delivering high-end,
              result-oriented staffing built for enterprises that need to scale
              technical capability without scaling overhead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Link
                to="/contact"
                className="font-mono text-xs tracking-wider uppercase px-8 py-4 rounded-full glass text-white transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:bg-white/20 hover:shadow-glow"
              >
                Request Talent →
              </Link>
              <Link
                to="/staffing-solutions"
                className="font-mono text-xs tracking-wider uppercase px-8 py-4 rounded-full border border-white/40 text-white transition-all duration-[400ms] hover:bg-white hover:text-green-dim hover:scale-105"
              >
                View Solutions
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom floating quick-action bar — TMF-style structure */}
        <HeroQuickBar />
      </section>

      {/* Trust bar */}
      <div className="relative border-b border-line py-8 overflow-hidden bg-panel">
        <div className="flex gap-16 marquee-track whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span key={i} className="font-mono text-sm text-inkdim/60 tracking-widest">
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* CORE ADVANTAGE SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <ScrollReveal className="order-2 lg:order-1 overflow-hidden rounded-3xl shadow-soft group">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=webp&w=1200&q=80"
            alt="Server infrastructure"
            loading="lazy"
            decoding="async"
            width="1200"
            height="380"
            className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="order-1 lg:order-2">
          <SectionHeading eyebrow="The Advantage" title="AI-Enabled Talent & Optimization" />
          <p className="text-inkdim leading-relaxed mt-5">
            We don't just match resumes to job descriptions; we optimize human
            capital. Our proprietary, AI-enabled talent platform evaluates deep
            technical competency, architectural aptitude, and delivery velocity
            with absolute precision — compressing onboarding time and unlocking
            unprecedented project delivery ease.
          </p>
        </ScrollReveal>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="border-y border-line bg-panel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <SectionHeading
            eyebrow="What We Do"
            title="Intelligent workforce architecture, on demand"
            description="From short-term sprint relief to C-suite placements — four staffing models engineered for precision."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="group card-lift rounded-2xl border border-line bg-void p-7 h-full hover:border-blue/40">
                  <span className="font-mono text-[0.65rem] text-blue tracking-wider uppercase">{s.tag}</span>
                  <h3 className="font-display text-xl font-semibold text-ink mt-4">{s.title}</h3>
                  <p className="text-inkdim text-sm leading-relaxed mt-3">{s.desc}</p>
                  <Link
                    to="/staffing-solutions"
                    className="inline-flex items-center gap-1 text-xs font-mono text-blue mt-5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Learn more <ArrowUpRight size={13} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GLOBAL ENTERPRISES PARTNER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="Why Enterprises Partner With Us" title="Built for scale, engineered for precision" />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {USPS.map((u, i) => (
            <ScrollReveal key={u.title} delay={i * 0.08} className="flex gap-5 group">
              <div className="w-11 h-11 shrink-0 rounded-xl border border-green/25 bg-green/[0.06] flex items-center justify-center transition-transform duration-[400ms] group-hover:rotate-6 group-hover:scale-110">
                <u.icon size={18} className="text-green" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{u.title}</h3>
                <p className="text-inkdim text-sm leading-relaxed mt-2">{u.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-line bg-green-dim">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 4.2, suffix: "x", label: "Faster onboarding", decimals: 1 },
            { value: 30, suffix: "+", label: "Global talent hubs", decimals: 0 },
            { value: 98, suffix: "%", label: "Match precision", decimals: 0 },
            { value: 6, suffix: "", label: "Core industries", decimals: 0 },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <AnimatedCounter
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals}
                className="font-display text-4xl md:text-5xl font-bold text-white"
              />
              <p className="text-white/70 text-xs font-mono mt-2 uppercase tracking-wider">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SNAPSHOT */}
      <section className="bg-panel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="flex flex-wrap justify-between items-end gap-6">
            <SectionHeading eyebrow="Domain Expertise" title="Industries we serve" />
            <Link to="/industries" className="link-underline font-mono text-xs tracking-wider uppercase text-blue flex items-center gap-1">
              View all <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {INDUSTRIES.map((ind, i) => (
              <ScrollReveal key={ind} delay={i * 0.05}>
                <div className="card-lift rounded-2xl border border-line bg-void p-6 hover:border-blue/40 font-display text-ink text-lg font-medium">
                  {ind}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY QUOTE */}
      <section className="relative py-28 px-6 lg:px-10 overflow-hidden bg-void">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <ScrollReveal className="relative max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="font-display text-2xl md:text-4xl font-medium text-ink leading-[1.3] tracking-tight">
              "In an AI-driven world, competitive advantage belongs to enterprises
              that can scale their technical capability{" "}
              <span className="text-blue">without scaling their overhead.</span>"
            </p>
            <cite className="block eyebrow mt-8 not-italic">— Stafyin Core Philosophy</cite>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="border-t border-line max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="Trusted Delivery" title="What our partners say" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-lift rounded-2xl border border-line bg-panel p-7 h-full hover:border-blue/40">
                <p className="text-inkdim text-sm leading-relaxed">
                  "Stafyin embedded engineers into our sprint in under two weeks —
                  the matching precision changed how we plan headcount."
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-9 h-9 rounded-full bg-green/15 border border-green-dim" />
                  <div>
                    <p className="text-ink text-sm font-medium">VP Engineering</p>
                    <p className="text-inkdim text-xs font-mono">Global Enterprise</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/testimonials" className="link-underline font-mono text-xs tracking-wider uppercase text-blue">
            Read all testimonials →
          </Link>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
