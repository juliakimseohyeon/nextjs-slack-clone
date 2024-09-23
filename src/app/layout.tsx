import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slack Clone",
  description: "Slack clone web app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>
            <CreateWorkspaceModal />
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
