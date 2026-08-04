import { Helmet } from "react-helmet-async";

/**
 * Google Analytics 4 — only injects the tracking script when a real
 * Measurement ID is provided via environment variable. Never hardcode
 * a fake/placeholder ID here; set VITE_GA_MEASUREMENT_ID in a .env file
 * (e.g. VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX) once you have the real one
 * from Google Analytics.
 */
export default function Analytics() {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!gaId) return null;

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </script>
    </Helmet>
  );
}
