import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";
import { MapPin, Briefcase } from "lucide-react";

const ROLES = [
  { title: "Technical Recruiter — IT Staffing", location: "Remote / Hybrid", type: "Full-time" },
  { title: "Talent Sourcing Specialist", location: "Remote", type: "Full-time" },
  { title: "Client Delivery Manager", location: "On-site", type: "Full-time" },
];

export default function Careers() {
  return (
    <Layout>
      <SEO
        title="Careers — Join Stafyin"
        description="Open roles at Stafyin for recruiters, engineers, and delivery operators building the future of AI-first IT staffing."
        path="/careers"
      />
      <Breadcrumbs label="Careers" path="/careers" />
      <PageHero
        eyebrow="Join Stafyin"
        title="Build the Future of Intelligent Staffing"
        highlightWords={["Intelligent", "Staffing"]}
        subtitle="We're always looking for people who think in systems — recruiters, engineers, and operators who want to redefine how enterprises scale technical talent."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&fm=webp&w=1920&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <p className="eyebrow mb-6">Open Roles</p>
        <div className="space-y-4">
          {ROLES.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.08}>
              <div className="card-lift flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-line bg-panel p-6 hover:border-blue/40">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{r.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-inkdim text-xs font-mono">
                      <MapPin size={13} /> {r.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-inkdim text-xs font-mono">
                      <Briefcase size={13} /> {r.type}
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="font-mono text-xs tracking-wider uppercase px-5 py-3 rounded-full border border-green/40 text-ink hover:bg-green hover:text-white hover:scale-105 transition-all duration-[400ms] text-center"
                >
                  Apply
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-inkdim text-sm mt-8 font-mono">
          ⚠ Full role details and internal openings pending — placeholder listings above, update once client shares confirmed positions.
        </p>
      </section>

      <CTABanner
        title="Don't see the right role?"
        subtitle="Send us your profile — we're growing across recruiting, delivery, and operations."
        buttonLabel="Contact Us"
      />
    </Layout>
  );
}
