import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import TiltPanel from "../components/TiltPanel";
import SEO from "../components/SEO";
import { Shield, Target, Globe2, Mail, MapPin } from "lucide-react";

const STATS = [
  { value: 50, suffix: "+", label: "Active Recruiters", desc: "Specialized technical sourcing experts globally." },
  { value: 2, suffix: "", label: "Core Nations Hub", desc: "Seamlessly serving APAC, LATAM & North America." },
  { value: 25, suffix: "M", prefix: "$", label: "Global Revenue", desc: "Solid financial health backing scaled operations." },
];

const METHODOLOGY = [
  {
    icon: Shield,
    num: "01",
    title: "Multilayer Quality",
    desc: "We ensure exceptional technical competence & alignment:",
    points: [
      "Granular tech skill-matrix assessments",
      "Hands-on code execution verification",
      "SME-driven functional & behavioral fit",
      "Immigration checks & barcode validation",
    ],
  },
  {
    icon: Target,
    num: "02",
    title: "Sourcing Strategy",
    desc: "We pull exceptional candidates through distinct channels:",
    points: [
      "Advanced LinkedIn RPS sourcing",
      "Pre-vetted bench resource networks",
      "Technical communities (GitHub, StackOverflow)",
      "Automated internal AI database (ATS)",
    ],
  },
  {
    icon: Globe2,
    num: "03",
    title: "Market Agility",
    desc: "Consistent, top-tier speed of delivery & high-volume capacity:",
    points: [
      "15+ years direct vendor program operations",
      "1,000+ robust job orders processed monthly",
      "< 4 hours delivery for common roles",
      "< 8 hours response for highly niche AI/IT",
    ],
  },
];

const TECH_MATRIX = [
  {
    domain: "Apps & Digital",
    stack: "Java, .NET, Python, UI/UX (Figma, Adobe), Angular, React.js, Node.js",
    roles: ["Fullstack Dev", "Architect"],
  },
  {
    domain: "Data & Analytics",
    stack: "Generative AI, Large Language Models (LLM), Hadoop, SQL, NoSQL, Tableau",
    roles: ["AI Engineer", "Data Scientist"],
  },
  {
    domain: "Cloud & Infra",
    stack: "Amazon Web Services (AWS), Azure, Google Cloud (GCP), DevOps Pipelines, SRE",
    roles: ["DevOps Lead", "Cloud Admin"],
  },
  {
    domain: "Enterprise Apps",
    stack: "Salesforce Systems, Adobe Experience Manager (AEM), Microsoft Dynamics, CRM",
    roles: ["CRM Architect", "Business Analyst"],
  },
  {
    domain: "Deep Engineering",
    stack: "5G Modern Wireless Testing, Telephony Systems, Embedded OS, IoT, Cellular RF",
    roles: ["Embedded Dev", "RF Tester"],
  },
];

const PARTNERS = ["TATA TCS", "GENPACT", "INFOSYS", "L&T TECH", "SYNECHRON"];

const PROCESS = [
  {
    num: "01",
    title: "Intake & Alignment",
    desc: "Establish clear target job directives, map requisite skill matrices, and analyze project deliverables.",
  },
  {
    num: "02",
    title: "Multi-Tier Screen",
    desc: "Rigorous platform tests, technical panel interview sessions, and strict code execution verifications.",
  },
  {
    num: "03",
    title: "Functional Fit",
    desc: "Determine career goals, verify behavioral parameters, track previous assignments, and run references.",
  },
  {
    num: "04",
    title: "Onboarding & QA",
    desc: "Verify professional background parameters, perform structured visa validations, and establish contracts.",
  },
];

export default function Company() {
  return (
    <Layout>
      <SEO
        title="Company — Global Presence, Proven Capabilities"
        description="Stafyin is a premier technology staffing partner: staff augmentation, SOW projects, RPO, and payroll solutions across APAC, delivered from Dallas TX and Indore, India."
        path="/company"
      />

      <Breadcrumbs label="Company" path="/company" />
      <PageHero
        eyebrow="Overview"
        title="IT Staffing & Professional Services"
        highlightWords={["Professional", "Services"]}
        subtitle="Leading digital innovation, specialized technology placements, and strategic SOW solutions across APAC."
        image="/images/kavya-singh.jpg"
        showQuickBar={false}
      />

      {/* CORE MISSION + STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-start">
        <ScrollReveal>
          <SectionHeading eyebrow="Who We Are" title="Global Presence, Proven Capabilities" />
          <p className="text-inkdim leading-relaxed mt-5">
            Stafyin is a premier technology staffing and professional solutions
            partner. We specialize in robust staff augmentation, statement of
            work (SOW) projects, independent contracting compliance, RPO
            processes, and agile payroll solutions.
          </p>
          <p className="text-inkdim leading-relaxed mt-4">
            Leveraging state-of-the-art development spaces in Dallas, TX, and
            premium offshore facilities in Indore, India, we successfully
            service top-tier national and international clients with agility
            and scale.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {STATS.map((s, i) => (
            <TiltPanel key={s.label} index={i} className="p-6">
              <div className="flex items-baseline gap-4">
                <AnimatedCounter
                  value={s.value}
                  prefix={s.prefix || ""}
                  suffix={s.suffix}
                  className="font-display text-4xl font-bold text-blue shrink-0"
                />
                <div>
                  <p className="text-ink font-semibold">{s.label}</p>
                  <p className="text-inkdim text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            </TiltPanel>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-y border-line bg-panel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <SectionHeading eyebrow="Leadership" title="Founder & Chairman Profile" />
          <ScrollReveal delay={0.1} className="mt-12">
            <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start bg-void rounded-3xl border border-line p-8 lg:p-10 shadow-soft">
              <img
                src="/images/kavya-singh.jpg"
                alt="Kavya Singh, Founder & Chairman of Stafyin"
                loading="lazy"
                decoding="async"
                width="220"
                height="220"
                className="w-full aspect-square object-cover rounded-2xl"
              />
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">Kavya Singh</h3>
                <p className="text-blue text-sm font-mono mt-1">
                  MBA with HR Majors · Master of Computer Management (India)
                </p>
                <p className="text-inkdim leading-relaxed mt-5">
                  Mrs. Kavya Singh is an award-winning executive and
                  entrepreneur with over 10 years of active business and
                  technology consulting experience. She has served numerous
                  global tech, artificial intelligence, and strategic
                  logistical ventures across the US, Canada, and India.
                </p>
                <p className="text-inkdim leading-relaxed mt-4">
                  As the visionary behind our foundational tech framework, she
                  orchestrates forward-looking tech-staffing pipelines, and
                  additionally acts as a strategic General Partner at multiple
                  AI venture spaces and investment funds globally.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="Delivery" title="Our Rigorous Methodology" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {METHODOLOGY.map((m, i) => (
            <TiltPanel key={m.title} index={i} className="p-7 h-full">
              <div className="w-11 h-11 rounded-xl bg-blue/[0.08] border border-blue/20 flex items-center justify-center">
                <m.icon size={18} className="text-blue" />
              </div>
              <p className="font-mono text-[0.65rem] text-inkdim mt-4">{m.num}</p>
              <h3 className="font-display text-lg font-semibold text-ink mt-1">{m.title}</h3>
              <p className="text-inkdim text-sm mt-3">{m.desc}</p>
              <ul className="mt-4 space-y-2">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink">
                    <span className="text-blue mt-0.5">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </TiltPanel>
          ))}
        </div>
      </section>

      {/* DOMAIN & TECHNOLOGY MATRIX */}
      <section className="border-y border-line bg-panel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <SectionHeading eyebrow="Capabilities" title="Domain & Technology Matrices" />
          <div className="mt-12 space-y-3">
            {TECH_MATRIX.map((row, i) => (
              <ScrollReveal key={row.domain} delay={i * 0.06}>
                <div className="card-lift rounded-2xl border border-line bg-void p-6 grid md:grid-cols-[200px_1fr_auto] gap-4 md:items-center hover:border-blue/40">
                  <p className="font-display font-semibold text-ink">{row.domain}</p>
                  <p className="text-inkdim text-sm">{row.stack}</p>
                  <div className="flex flex-wrap gap-2">
                    {row.roles.map((r) => (
                      <span
                        key={r}
                        className="font-mono text-[0.65rem] tracking-wide uppercase text-blue bg-blue/[0.08] border border-blue/20 px-3 py-1.5 rounded-full whitespace-nowrap"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTELE & PARTNERS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <SectionHeading
          eyebrow="Partners"
          title="Clientele & MSP Partnerships"
          description="Enterprise system integrators & tech corporates."
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {PARTNERS.map((p, i) => (
            <ScrollReveal key={p} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-panel py-8 px-4 text-center font-mono text-sm font-medium text-inkdim tracking-wide hover:border-blue/40 hover:text-ink transition-colors duration-300">
                {p}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* RECRUITMENT PROCESS FLOW */}
      <section className="border-y border-line bg-panel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <SectionHeading eyebrow="Workflow" title="Systematic Recruitment Process Flow" />
          <div className="relative mt-16 grid md:grid-cols-4 gap-10 md:gap-6">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-line" />
            {PROCESS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1} className="relative text-center">
                <div className="w-12 h-12 mx-auto rounded-full border-2 border-blue bg-void flex items-center justify-center font-mono text-sm font-semibold text-blue relative z-10">
                  {step.num}
                </div>
                <h3 className="font-display text-base font-semibold text-ink mt-5">{step.title}</h3>
                <p className="text-inkdim text-sm leading-relaxed mt-2">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
            Connect with our regional sourcing hubs
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <div className="flex items-center gap-3 justify-center">
              <MapPin size={18} className="text-blue shrink-0" />
              <span className="text-inkdim text-sm text-left">
                Stafyin Technologies Private Limited<br />
                81, Vijay Nagar, Indore, MP 452010
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Mail size={18} className="text-blue shrink-0" />
              <span className="text-inkdim text-sm">careers@stafyin.com</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <CTABanner
        title="Questions about our sourcing framework?"
        subtitle="We welcome your questions regarding pricing metrics or compliance platforms."
      />
    </Layout>
  );
}
