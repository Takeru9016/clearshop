import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";
import { CartSheet, Header } from "@/components";
import { CartStoreProvider, ChatStoreProvider } from "@/providers";
import { SanityLive } from "@/sanity/lib/live";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
          <SanityLive />
          <Toaster position="top-center" richColors />
          <Header />
          <main>{children}</main>
          <CartSheet />
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkProvider>
  );
}
