import { Link } from "react-router-dom";
import Logo from "./Logo";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.1-9.3L.8 2h7.4l5.1 6.7L18.9 2zm-1.3 18h2L6.5 4H4.4l13.2 16z" />
  </svg>
);

const SERVICES = [
  { to: "/staffing-solutions", label: "Contingent Staffing" },
  { to: "/staffing-solutions", label: "Permanent Staffing" },
  { to: "/staffing-solutions", label: "Executive Search" },
  { to: "/staffing-solutions", label: "RPO" },
];

const INDUSTRIES = [
  { to: "/industries", label: "BFSI" },
  { to: "/industries", label: "Retail & E-Commerce" },
  { to: "/industries", label: "Healthcare" },
  { to: "/industries", label: "IT / ITES" },
  { to: "/industries", label: "Pharma & Clinical Research" },
  { to: "/industries", label: "Public Sector" },
];

const COMPANY = [
  { to: "/about", label: "About Us" },
  { to: "/it-consulting", label: "IT Consulting" },
  { to: "/company", label: "Company" },
  { to: "/learning-solutions", label: "Learning Solutions" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="mb-4">
              <Logo size={30} />
            </div>
            <p className="text-inkdim text-sm leading-relaxed max-w-xs">
              AI-first digital enablement and IT staffing built for enterprises that
              scale technical capability without scaling overhead.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/stafyin-technology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inkdim hover:text-white hover:bg-green hover:border-green hover:rotate-6 transition-all duration-300"
              >
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inkdim hover:text-white hover:bg-green hover:border-green hover:rotate-6 transition-all duration-300">
                <XIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Services</p>
            <ul className="space-y-3">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="link-underline text-sm text-inkdim hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Industries</p>
            <ul className="space-y-3">
              {INDUSTRIES.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="link-underline text-sm text-inkdim hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-3">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="link-underline text-sm text-inkdim hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-inkdim font-mono">
            © {new Date().getFullYear()} STAFYIN. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-inkdim hover:text-ink font-mono">Privacy Policy</a>
            <a href="#" className="text-xs text-inkdim hover:text-ink font-mono">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
