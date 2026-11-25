import { LandingView } from "@/components/landing-page";
import { haftalikPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(haftalikPage);

export default function HaftalikPage() {
  return <LandingView page={haftalikPage} />;
}
