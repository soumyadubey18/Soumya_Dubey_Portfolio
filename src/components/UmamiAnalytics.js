import { useEffect } from "react";

const UMAMI_WEBSITE_ID =
  process.env.REACT_APP_UMAMI_WEBSITE_ID || "5fc7eaaf-cf15-4300-96b6-e1bb71839e0e";

const UmamiAnalytics = () => {
  useEffect(() => {
    if (!UMAMI_WEBSITE_ID || document.getElementById("umami-analytics")) return;

    const script = document.createElement("script");
    script.id = "umami-analytics";
    script.src = "https://cloud.umami.is/script.js";
    script.async = true;
    script.setAttribute("data-website-id", UMAMI_WEBSITE_ID);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default UmamiAnalytics;
