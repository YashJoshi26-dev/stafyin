import { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Breadcrumbs from "../components/Breadcrumbs";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";
import { Mail, Phone, MapPin, MessageCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.target);

    // Honeypot: a field real users never see or fill. Bots that
    // auto-fill every field will trip this, so we silently drop the
    // submission instead of showing an error (don't tip bots off).
    if (form.get("website")) {
      setSubmitted(true);
      return;
    }

    // TODO: wire this up to a real email/backend endpoint. For now this
    // only confirms the form is valid and shows the success state.
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-void border border-line rounded-xl px-4 py-3 text-ink text-sm focus:border-blue outline-none transition-colors";

  return (
    <Layout>
      <SEO
        title="Contact Us — Request Talent"
        description="Get in touch with Stafyin's delivery team for contingent, permanent, executive search, or RPO staffing needs."
        path="/contact"
      />
      <Breadcrumbs label="Contact" path="/contact" />
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Scale Your Technical Capability"
        highlightWords={["Technical", "Capability"]}
        subtitle="Tell us about your staffing need — contingent, permanent, executive search, or RPO — and our delivery team will follow up."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&fm=webp&w=1920&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-[1fr_1.2fr] gap-14">
        {/* Contact info */}
        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", value: "hello@stafyin.com" },
            { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with our delivery team" },
            { icon: MapPin, label: "Global Hubs", value: "Onshore, nearshore & offshore delivery centers across strategic talent hubs." },
          ].map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 0.06}>
              <div className="card-lift rounded-2xl border border-line bg-panel p-7 flex gap-4 hover:border-blue/40">
                <c.icon size={20} className="text-blue shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="eyebrow mb-1">{c.label}</p>
                  <p className="text-ink text-sm">{c.value}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Form */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-panel p-8 lg:p-10 shadow-soft h-full">
            {submitted ? (
              <div className="text-center py-16" role="status" aria-live="polite">
                <p className="font-display text-2xl text-ink font-semibold">Message sent.</p>
                <p className="text-inkdim text-sm mt-3">Our delivery team will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {error && (
                  <div
                    role="alert"
                    className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    {error}
                  </div>
                )}

                {/* Honeypot field — hidden from sighted users and screen readers,
                    but visible to naive bots that fill every input. */}
                <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field blank</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="eyebrow block mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="eyebrow block mb-2">Company</label>
                    <input
                      required
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="eyebrow block mb-2">Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="eyebrow block mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="need" className="eyebrow block mb-2">Staffing Need</label>
                  <select required id="need" name="need" defaultValue="" className={inputClass}>
                    <option value="" disabled>Select a service</option>
                    <option>Contingent Staffing</option>
                    <option>Permanent Staffing</option>
                    <option>Executive Search</option>
                    <option>RPO</option>
                    <option>IT Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    id="message"
                    name="message"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="font-mono text-xs tracking-wider uppercase px-8 py-4 rounded-full bg-green text-white hover:scale-105 hover:shadow-glow transition-all duration-[400ms] w-full sm:w-auto"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
}
