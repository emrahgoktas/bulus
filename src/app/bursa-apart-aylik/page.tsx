import { LandingView } from "@/components/landing-page";
import { aylikPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(aylikPage);

export default function AylikPage() {
  return <LandingView page={aylikPage} />;
}
