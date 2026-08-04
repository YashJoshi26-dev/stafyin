export default function MatchTag({ label, value, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-wider text-green-dim border border-green/25 bg-green/[0.06] px-3 py-1.5 rounded-full ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
      {label}
      {value && <span className="text-blue">{value}</span>}
    </span>
  );
}
