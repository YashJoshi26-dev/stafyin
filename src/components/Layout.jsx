import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import ScrollProgress from "./ScrollProgress";
import Analytics from "./Analytics";

const SITE_URL = "https://www.stafyin.com"; // TODO: update to real production domain

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stafyin",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Stafyin is an AI-first digital enablement company delivering contingent, permanent, executive search, and RPO staffing solutions for global enterprises.",
  sameAs: [
    // TODO: add real social profile URLs
    // "https://www.linkedin.com/company/stafyin",
    // "https://twitter.com/stafyin",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Stafyin",
  url: SITE_URL,
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-void noise-overlay flex flex-col">
      <Helmet>
        {import.meta.env.VITE_GSC_VERIFICATION && (
          <meta name="google-site-verification" content={import.meta.env.VITE_GSC_VERIFICATION} />
        )}
        <script type="application/ld+json">{JSON.stringify(ORG_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(WEBSITE_SCHEMA)}</script>
      </Helmet>
      <Analytics />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}
