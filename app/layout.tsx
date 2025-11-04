export const metadata = {
  metadataBase: new URL("https://www.newoodmillwork.com"),
  title: {
    default: "NEWOOD MILLWORK INC | Custom Kitchens, Closets & Millwork",
    template: "%s | NEWOOD MILLWORK INC",
  },
  description: "Custom kitchens, closets, and architectural millwork built with CNC precision in Concord, Ontario.",
  openGraph: {
    title: "NEWOOD MILLWORK INC",
    description: "Custom kitchens, closets, and architectural millwork built with CNC precision.",
    url: "https://www.newoodmillwork.com",
    siteName: "NEWOOD MILLWORK INC",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_CA",
    type: "website",
  },
  alternates: { canonical: "https://www.newoodmillwork.com" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
