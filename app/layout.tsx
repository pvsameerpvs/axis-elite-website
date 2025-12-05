import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "AXIS ELITE MANAGEMENT CONSULTANTS LLC",
  description:
    "Strategic Solutions. Digital Excellence. Business Growth. AXIS ELITE MANAGEMENT CONSULTANTS LLC and SUN WAVE INNOVATIONS LLC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="pb-16 pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
