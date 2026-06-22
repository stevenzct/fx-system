import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FX Control Ledger System",
  description: "FX control ledger and branch management prototype",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
