import { LandingView } from "@/components/landing-page";
import { osmangaziPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(osmangaziPage);

export default function OsmangaziPage() {
  return <LandingView page={osmangaziPage} />;
}
