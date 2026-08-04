import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Building2, Search, MessageSquare } from "lucide-react";

const ITEMS = [
  { icon: Users, label: "Contingent Staffing", to: "/staffing-solutions" },
  { icon: Building2, label: "Permanent Staffing", to: "/staffing-solutions" },
  { icon: Search, label: "Executive Search", to: "/staffing-solutions" },
  { icon: MessageSquare, label: "Talk to Us", to: "/contact" },
];

export default function HeroQuickBar() {
  return (
    <div className="relative bg-panel border-b border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-4xl mx-auto px-4 -translate-y-1/2"
      >
        <div className="glass rounded-2xl md:rounded-full px-3 py-3 md:px-4 md:py-2.5 grid grid-cols-2 md:flex md:items-center md:justify-between gap-2 shadow-lift">
          {ITEMS.map((item, i) => (
            <Link
              key={item.label}
              to={item.to}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/15 transition-all duration-[400ms] ${
                i < ITEMS.length - 1 ? "md:border-r md:border-white/20" : ""
              }`}
            >
              <item.icon size={15} className="text-blue-bright shrink-0 transition-transform duration-[400ms] group-hover:rotate-6" />
              <span className="font-mono text-[0.68rem] tracking-wide uppercase whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
