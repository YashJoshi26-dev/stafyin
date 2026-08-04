import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">
          This page doesn't exist
        </h1>
        <p className="text-inkdim mt-4 max-w-md">
          The link may be broken, or the page may have moved. Let's get you
          back on track.
        </p>
        <Link
          to="/"
          className="font-mono text-xs tracking-wider uppercase px-7 py-4 rounded-full bg-green text-white mt-8 hover:scale-105 hover:shadow-glow transition-all duration-[400ms]"
        >
          Back to Home →
        </Link>
      </section>
    </Layout>
  );
}
