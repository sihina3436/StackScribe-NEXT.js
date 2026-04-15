import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_component/Footer";

export const metadata: Metadata = {
  title: "Stack Scribe",
  description: "StackScribe is a modern tech blog platform built with Next.js and TypeScript, featuring an admin dashboard for publishing developer-focused articles, tutorials, and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className="min-h-screen bg-gray-200">
          {children}
        <Footer/>
      </body>
    </html>
  );
}
