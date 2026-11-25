import { LandingView } from "@/components/landing-page";
import { altiparmakPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(altiparmakPage);

export default function AltiparmakPage() {
  return <LandingView page={altiparmakPage} />;
}
