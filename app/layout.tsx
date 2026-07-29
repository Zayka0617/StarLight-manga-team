import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StarLight Manga",
  description:
    "Манга бол зүгээр нэг түүх биш, энэ бол өөр ертөнц рүү хүрэх оддын хаалга."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
