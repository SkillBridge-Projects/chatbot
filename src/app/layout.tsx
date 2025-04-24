"use client";
import "./globals.css";
import MainComponent from "@/components/mainComponent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={``} suppressHydrationWarning={true}>
        <MainComponent children={children} />
      </body>
    </html>
  );
}
