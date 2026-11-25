import { LandingView } from "@/components/landing-page";
import { saatlikPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(saatlikPage);

export default function SaatlikPage() {
  return <LandingView page={saatlikPage} />;
}
