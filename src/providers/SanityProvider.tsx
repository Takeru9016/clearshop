"use client";

import dynamic from "next/dynamic";

import LoadingSpinner from "@/components/loaders/LoadingSpinner";

const SanityAppProvider = dynamic(
  () => import("@/providers/SanityAppProvider"),
  {
    ssr: false,
    loading: () => (
      <LoadingSpinner text="Loading Sanity App SDK..." isFullScreen size="lg" />
    ),
  }
);

export function SanityProvider({ children }: { children: React.ReactNode }) {
  return <SanityAppProvider>{children}</SanityAppProvider>;
}
