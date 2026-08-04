/**
 * Stafyin brand mark — official logo asset (public/images/logo-mark.png).
 * Single source of truth so the icon never drifts between Navbar / Footer.
 */
export function LogoMark({ size = 32, className = "" }) {
  return (
    <img
      src="/images/logo-mark.png"
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

export default function Logo({ size = 32, showWordmark = true, dark = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          className={`font-display font-extrabold tracking-tight leading-none ${
            dark ? "text-white" : "text-ink"
          }`}
          style={{ fontSize: size * 0.5 }}
        >
          STAFYIN
        </span>
      )}
    </span>
  );
}
