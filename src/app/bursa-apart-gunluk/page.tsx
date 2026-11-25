import { LandingView } from "@/components/landing-page";
import { gunlukPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(gunlukPage);

export default function GunlukPage() {
  return <LandingView page={gunlukPage} />;
}
