import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SITE_URL = "https://www.stafyin.com";

export default function Breadcrumbs({ label, path }) {
  if (!path || path === "/") return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: SITE_URL + path,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-5">
        <ol className="flex items-center gap-1.5 text-xs font-mono text-inkdim">
          <li>
            <Link to="/" className="hover:text-ink transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-1.5">
            <ChevronRight size={12} />
            <span className="text-ink" aria-current="page">
              {label}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
}
