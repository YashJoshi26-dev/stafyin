import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/it-consulting", label: "IT Consulting" },
  { to: "/staffing-solutions", label: "Staffing Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/company", label: "Company" },
  { to: "/learning-solutions", label: "Learning" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void/95 backdrop-blur-md border-b border-line">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)} aria-label="Stafyin home">
          <Logo size={30} />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `link-underline text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-blue-bright" : "text-inkdim hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-full bg-green text-white transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Start a Search
          </Link>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-void border-t border-line mx-4 rounded-2xl mt-2 mb-2 px-6 py-6 flex flex-col gap-5 shadow-soft">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium ${isActive ? "text-blue-bright" : "text-ink"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="font-mono text-xs tracking-wider uppercase px-5 py-3 rounded-full bg-green text-white text-center mt-2"
          >
            Start a Search
          </Link>
        </div>
      )}
    </header>
  );
}
