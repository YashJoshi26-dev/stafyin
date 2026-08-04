import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";
import { Landmark, ShoppingCart, HeartPulse, MonitorSmartphone, FlaskConical, Globe } from "lucide-react";

const INDUSTRIES = [
  {
    icon: Landmark,
    title: "BFSI",
    subtitle: "Banking, Financial Services & Insurance",
    desc: "Securing high-stakes, hyper-compliant architectures. We deploy technical squads built for algorithmic trading systems, robust fintech application layers, legacy core-banking migrations, and advanced cybersecurity compliance matrices.",
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&fm=webp&w=900&q=80",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    subtitle: "High-performance, frictionless customer journeys",
    desc: "From predictive AI inventory engines to distributed omni-channel commerce platforms, we supply the digital talent required to handle intense user scale and seasonal data spikes.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&fm=webp&w=900&q=80",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    subtitle: "Where patient care meets data",
    desc: "We source specialized talent skilled in integrating EHR/EMR platforms, building telehealth networks, and protecting critical medical data layers under stringent global regulations.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&fm=webp&w=900&q=80",
  },
  {
    icon: MonitorSmartphone,
    title: "IT / ITES",
    subtitle: "Fueling the global engines of technology delivery",
    desc: "We act as the core staffing partner for large-scale IT players, scaling regional nearshore delivery hubs and offshore technical teams with absolute velocity and seamless legal compliance.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&fm=webp&w=900&q=80",
  },
  {
    icon: FlaskConical,
    title: "Pharma & Clinical Research",
    subtitle: "Accelerating discovery through advanced data analytics",
    desc: "We align data scientists, computational architects, and validation engineers who understand the technical complexities of drug discovery pipelines, clinical data visualization, and regulatory submission frameworks.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&fm=webp&w=900&q=80",
  },
  {
    icon: Globe,
    title: "Public Sector & Government",
    subtitle: "Resilient, accessible, scalable civic infrastructure",
    desc: "We provide vetted, secure engineering talent dedicated to modernization initiatives, cloud infrastructure transitions, and citizen-facing digital portal optimization.",
    img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&fm=webp&w=900&q=80",
  },
];

export default function Industries() {
  return (
    <Layout>
      <SEO
        title="Industries We Serve — BFSI, Retail, Healthcare, IT, Pharma, Public Sector"
        description="Deep domain expertise across BFSI, retail & e-commerce, healthcare, IT/ITES, pharma & clinical research, and public sector technology staffing."
        path="/industries"
      />
      <Breadcrumbs label="Industries" path="/industries" />
      <PageHero
        eyebrow="Domain Expertise"
        title="Deep Domain Expertise, Powered by Intelligent Execution"
        highlightWords={["Domain", "Expertise,"]}
        subtitle="Technology manifests differently in every sector. Stafyin combines specialized industry intelligence with elite software engineering capabilities to deliver bespoke talent frameworks for highly regulated and high-velocity markets."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&fm=webp&w=1920&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 0.07}>
              <div className="group card-lift rounded-3xl border border-line bg-panel overflow-hidden h-full hover:border-blue/40">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-void/90 border border-green/30 flex items-center justify-center transition-transform duration-[400ms] group-hover:rotate-6">
                    <ind.icon size={18} className="text-green" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{ind.title}</h3>
                  <p className="text-blue text-xs font-mono mt-1">{ind.subtitle}</p>
                  <p className="text-inkdim text-sm leading-relaxed mt-4">{ind.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABanner
        title="Talent that already speaks your industry's language."
        subtitle="Tell us your sector — we'll bring engineers who've solved this before."
      />
    </Layout>
  );
}
