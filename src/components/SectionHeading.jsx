import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <ScrollReveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-inkdim text-base leading-relaxed mt-4">{description}</p>
      )}
    </ScrollReveal>
  );
}
