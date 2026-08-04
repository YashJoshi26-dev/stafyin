import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const SERVICES = [
  {
    num: "01",
    title: "AI-First Architecture & Digital Transformation",
    focus: "Transitioning legacy systems into high-performing, AI-enabled digital platforms.",
    deliverables: "Enterprise AI strategy, frontend architecture blueprints, data visualization pipeline design, microservices optimization.",
    advantage: "Custom architectural roadmaps built to handle complex corporate datasets while drastically minimizing engineering bloat.",
  },
  {
    num: "02",
    title: "Strategic Talent Optimization & Capability Mapping",
    focus: "Maximizing human capital ROI through data-driven operational analysis.",
    deliverables: "Technical competency benchmarking, team velocity charting, organizational maturity assessments.",
    advantage: "We align your internal teams with precision-matched contingent labour to meet immediate sprints and long-term IT objectives.",
  },
  {
    num: "03",
    title: "Global Delivery Frameworks & Nearshore/Offshore Structuring",
    focus: "Seamlessly expanding operational footprint across regional nearshore hubs and offshore delivery centers.",
    deliverables: "Compliance mapping, operational workflow design, cross-border integration playbooks, secure hybrid infrastructure setup.",
    advantage: "Built-in legal infrastructure across strategic talent hubs ensures rapid deployment with zero administrative friction.",
  },
  {
    num: "04",
    title: "Tech Stack Modernization & Performance Engineering",
    focus: "Eliminating technical debt and maximizing stack efficiency to drive long-term cost reduction.",
    deliverables: "Modern framework performance tuning, cloud cost optimization, CI/CD pipeline acceleration, structural security audits.",
    advantage: "Deep, practical expertise that turns sluggish, costly systems into lightning-fast, highly optimized digital engines.",
  },
];

export default function ITConsulting() {
  return (
    <Layout>
      <SEO
        title="IT Consulting — Architecting High-Velocity Digital Infrastructure"
        description="AI-first architecture, talent optimization, global delivery frameworks, and tech stack modernization consulting from Stafyin's enterprise engineering team."
        path="/it-consulting"
      />
      <Breadcrumbs label="IT Consulting" path="/it-consulting" />
      <PageHero
        eyebrow="IT Consulting"
        title="Architecting High-Velocity Digital Infrastructure"
        highlightWords={["Digital", "Infrastructure"]}
        subtitle="We bridge the gap between complex corporate strategy and flawless technical execution. We don't just advise; we engineer the systems that drive measurable cost reduction and long-term market dominance."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&fm=webp&w=1920&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="space-y-6">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.08}>
              <div className="card-lift rounded-3xl border border-line bg-panel p-8 lg:p-10 grid lg:grid-cols-[80px_1fr] gap-8 hover:border-blue/40">
                <span className="font-display text-4xl text-green/40 font-bold">{s.num}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{s.title}</h3>
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <p className="eyebrow mb-2">Core Focus</p>
                      <p className="text-inkdim text-sm leading-relaxed">{s.focus}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-2">Key Deliverables</p>
                      <p className="text-inkdim text-sm leading-relaxed">{s.deliverables}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-2 text-green">Stafyin Advantage</p>
                      <p className="text-inkdim text-sm leading-relaxed">{s.advantage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABanner
        title="Ready to re-architect your technical infrastructure?"
        subtitle="Bring in the team that engineers the systems, not just the advice."
      />
    </Layout>
  );
}
