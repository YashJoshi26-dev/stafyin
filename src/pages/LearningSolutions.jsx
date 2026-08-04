import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";
import { GraduationCap, Layers, Users } from "lucide-react";

export default function LearningSolutions() {
  return (
    <Layout>
      <SEO
        title="Learning Solutions — Upskilling Programs for Deployed Talent"
        description="Structured learning pathways and stack-aligned upskilling tracks for engineers deployed through Stafyin's staffing programs."
        path="/learning-solutions"
      />
      <Breadcrumbs label="Learning Solutions" path="/learning-solutions" />
      <PageHero
        eyebrow="Learning Solutions"
        title="Upskilling the Talent That Powers Your Roadmap"
        highlightWords={["Talent"]}
        subtitle="Alongside staffing, Stafyin is building structured learning pathways to keep deployed engineers aligned with the technical maturity of the stacks they work in — from framework upgrades to AI-tooling fluency."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&fm=webp&w=1920&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <ScrollReveal>
          <div className="rounded-3xl border border-line bg-panel p-10 lg:p-14 text-center shadow-soft">
            <p className="eyebrow mb-4">Program Details Coming Soon</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink max-w-xl mx-auto leading-snug">
              Our Learning Solutions curriculum is being finalized
            </h2>
            <p className="text-inkdim text-sm leading-relaxed mt-4 max-w-lg mx-auto">
              This page will detail our structured upskilling tracks, certification
              partnerships, and continuous learning programs for deployed talent.
              Check back soon, or get in touch for early access.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { icon: GraduationCap, title: "Structured Tracks", desc: "Role-specific learning paths mapped to real project needs." },
            { icon: Layers, title: "Stack-Aligned Curriculum", desc: "Content built around the exact technologies you deploy." },
            { icon: Users, title: "Cohort-Based Delivery", desc: "Peer learning designed for distributed engineering teams." },
          ].map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.08}>
              <div className="group card-lift rounded-2xl border border-line bg-void p-7 h-full hover:border-green/40">
                <div className="w-10 h-10 rounded-xl bg-green/[0.08] border border-green/20 flex items-center justify-center transition-transform duration-[400ms] group-hover:rotate-6">
                  <f.icon size={18} className="text-green" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink mt-4">{f.title}</h3>
                <p className="text-inkdim text-xs leading-relaxed mt-2">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABanner
        title="Want early access to our Learning Solutions?"
        subtitle="Reach out and we'll notify you as programs launch."
        buttonLabel="Get in Touch"
      />
    </Layout>
  );
}
