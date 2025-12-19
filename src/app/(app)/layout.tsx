import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";
import { CartStoreProvider } from "@/providers";
import { SanityLive } from "@/sanity/lib/live";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <SanityLive />
        <Toaster position="top-center" richColors />
        <main>{children}</main>
      </CartStoreProvider>
    </ClerkProvider>
  );
}
