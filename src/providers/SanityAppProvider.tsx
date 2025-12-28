"use client";

import { SanityApp, useHandleAuthCallback } from "@sanity/sdk-react";
import { dataset, projectId } from "@/sanity/env";

// Component to handle the OAuth callback from Sanity
function AuthCallbackHandler({ children }: { children: React.ReactNode }) {
  // This hook handles the OAuth callback and redirects back to the current page
  useHandleAuthCallback();
  return <>{children}</>;
}

function SanityAppProvider({ children }: { children: React.ReactNode }) {
  // Get the base URL for the callback - this ensures after login, users return to the admin page
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <SanityApp
      config={[
        {
          projectId,
          dataset,
          auth: {
            // Specify the callback URL to redirect back to admin after authentication
            callbackUrl: `${baseUrl}/admin`,
          },
        },
      ]}
      // We handle the loading state in the Providers component by showing a loading indicator via the dynamic import
      fallback={<div />}
    >
      <AuthCallbackHandler>{children}</AuthCallbackHandler>
    </SanityApp>
  );
}

export default SanityAppProvider;
