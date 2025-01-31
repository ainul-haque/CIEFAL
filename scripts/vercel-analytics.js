import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

inject();
injectSpeedInsights();

console.log("Vercel Analytics and Speed Insights initialized");
