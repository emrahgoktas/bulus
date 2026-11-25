"use client";

import { usePathname } from "next/navigation";
import { pageNameFromPath } from "@/lib/site";

export function usePageName() {
  const pathname = usePathname();
  return pageNameFromPath(pathname);
}
