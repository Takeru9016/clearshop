import { ClerkProvider } from "@clerk/nextjs";

import { SanityLive } from "@/sanity/lib/live";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <SanityLive />
      <main>{children}</main>
    </ClerkProvider>
  );
}
