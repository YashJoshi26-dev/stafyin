import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const SOLUTIONS = [
  {
    title: "Contingent Staffing",
    subtitle: "Flexible Velocity for Evolving Roadmaps",
    desc: "When your business requires agile scale to handle specialized project workloads or sudden market shifts, our premium contingent labour models provide immediate relief. We deploy pre-vetted, high-end technical squads who integrate seamlessly into your existing workflows without the friction of long-term operational overhead.",
    bestFor: "Meeting short-term sprint deadlines, technical stack migrations, and niche project executions.",
  },
  {
    title: "Permanent Staffing",
    subtitle: "Building Your Core Technical Vanguard",
    desc: "Long-term IT objectives require enduring foundations. We connect you with elite digital professionals who possess both the cultural alignment and architectural maturity to drive your internal technology roadmap forward. Our AI-driven competency mapping ensures an incredibly low attrition rate and maximum alignment on day one.",
    bestFor: "Expanding core internal teams, structural scaling, and long-term tech leadership continuity.",
  },
  {
    title: "Executive Search",
    subtitle: "Securing Digital-First Visionaries",
    desc: "Navigating an AI-first economy demands leadership that understands scale, architecture, and technology transformation. Our executive search division operates discreetly and precisely to recruit C-suite, VP, and Director-level executives who can lead complex global delivery structures into the future.",
    bestFor: "Retaining CTOs, CIOs, VPs of Engineering, and Global IT Delivery Directors.",
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    subtitle: "End-to-End Enterprise Talent Optimization",
    desc: "Transform your talent acquisition from an operational bottleneck into a competitive advantage. With Stafyin RPO, we embed our proprietary AI-enabled recruitment platform, offshore infrastructure, and specialist recruiters directly into your corporate ecosystem — managing everything from talent pooling to onboarding.",
    bestFor: "Large-scale enterprise expansions requiring optimized cost reduction and predictable, audited hiring pipelines.",
  },
];

export default function StaffingSolutions() {
  return (
    <Layout>
      <SEO
        title="Staffing Solutions — Contingent, Permanent, Executive Search & RPO"
        description="Intelligent workforce architecture for modern enterprises: contingent staffing, permanent placements, executive search, and end-to-end RPO from Stafyin."
        path="/staffing-solutions"
      />
      <Breadcrumbs label="Staffing Solutions" path="/staffing-solutions" />
      <PageHero
        eyebrow="Staffing Solutions"
        title="Intelligent Workforce Architecture for Modern Enterprises"
        highlightWords={["Workforce", "Architecture"]}
        subtitle="At Stafyin, we don't believe in one-size-fits-all recruitment. We deliver high-end, AI-enabled staffing solutions tailored to meet the dynamic short and long-term IT objectives of forward-thinking companies."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&fm=webp&w=1920&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {SOLUTIONS.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="group card-lift rounded-3xl border border-line bg-panel p-8 lg:p-10 h-full hover:border-blue/40">
                <span className="font-mono text-[0.65rem] text-blue tracking-wider uppercase">
                  Model {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink mt-3">{s.title}</h3>
                <p className="text-green text-sm font-medium mt-1">{s.subtitle}</p>
                <p className="text-inkdim text-sm leading-relaxed mt-5">{s.desc}</p>
                <div className="border-t border-line mt-6 pt-5">
                  <p className="eyebrow mb-2">Best For</p>
                  <p className="text-ink text-sm">{s.bestFor}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABanner
        title="Which staffing model fits your roadmap?"
        subtitle="Tell us the objective — we'll match the model, the talent, and the timeline."
        buttonLabel="Request Talent"
      />
    </Layout>
  );
}
