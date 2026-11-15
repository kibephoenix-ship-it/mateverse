import type { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "ScopePulse",
  title: {
    default: "ScopePulse | Proposal Intelligence",
    template: "%s | ScopePulse",
  },
  description:
    "Build clearer proposals, spot project risks early, and win better freelance work with ScopePulse.",
  keywords: [
    "freelance proposals",
    "proposal writing",
    "project scope",
    "freelance business",
  ],
  openGraph: {
    type: "website",
    siteName: "ScopePulse",
    title: "ScopePulse | Proposal Intelligence",
    description:
      "Build clearer proposals, spot project risks early, and win better freelance work.",
  },
  twitter: {
    card: "summary",
    title: "ScopePulse | Proposal Intelligence",
    description:
      "Build clearer proposals, spot project risks early, and win better freelance work.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
