import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";
import { AppShell, CartSheet, ChatSheet, Header } from "@/components";
import { CartStoreProvider, ChatStoreProvider } from "@/providers";
import { SanityLive } from "@/sanity/lib/live";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
          <AppShell>
            <Header />
            <main>{children}</main>
          </AppShell>
          <CartSheet />
          <ChatSheet />
          <Toaster position="top-center" richColors />
          <SanityLive />
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkProvider>
  );
}
