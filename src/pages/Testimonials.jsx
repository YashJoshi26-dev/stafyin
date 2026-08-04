import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const TESTIMONIALS = [
  {
    quote: "Stafyin embedded engineers into our sprint in under two weeks — the matching precision changed how we plan headcount.",
    name: "VP Engineering",
    org: "Global Financial Enterprise",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&fm=webp&w=200&q=80",
  },
  {
    quote: "The talent optimization platform is the real differentiator. We stopped sifting through resumes and started reviewing pre-qualified architects.",
    name: "Director of Talent Acquisition",
    org: "Retail Technology Group",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&fm=webp&w=200&q=80",
  },
  {
    quote: "Their nearshore delivery structuring let us scale a team across three regions without touching our compliance posture.",
    name: "CTO",
    org: "Healthcare Platform",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&fm=webp&w=200&q=80",
  },
  {
    quote: "Executive search that actually understood our architecture requirements — not just a title match.",
    name: "Chief People Officer",
    org: "Enterprise SaaS Company",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&fm=webp&w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <Layout>
      <SEO
        title="Client Testimonials & Reviews"
        description="What enterprise leaders say about scaling technical capability with Stafyin's AI-enabled staffing delivery."
        path="/testimonials"
      />
      <Breadcrumbs label="Testimonials" path="/testimonials" />
      <PageHero
        eyebrow="Client Voices"
        title="Testimonials & Client Vouchers on Stafyin"
        highlightWords={["Testimonials"]}
        subtitle="What enterprise leaders say about scaling technical capability with Stafyin's AI-enabled staffing delivery."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&fm=webp&w=1920&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-lift rounded-3xl border border-line bg-panel p-8 h-full hover:border-blue/40">
                <p className="font-display text-lg text-ink leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-7 pt-6 border-t border-line">
                  <img src={t.img} alt={t.name} loading="lazy" decoding="async" width="40" height="40" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-ink text-sm font-medium">{t.name}</p>
                    <p className="text-inkdim text-xs font-mono">{t.org}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
