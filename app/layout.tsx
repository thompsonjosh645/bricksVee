import type { Metadata } from "next";
import Page from "./page";

export const metadata: Metadata = {
  title: "Trust",
  description: "A valentine package",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col min-h-screen"}>
        <Page />
      </body>
    </html>
  );
}
