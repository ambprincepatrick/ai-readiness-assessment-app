import type { Metadata } from "next";
import { AssessmentProvider } from "@/context/AssessmentContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description: "Test What You Really Know. Not What You Think You Know.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-slate-50">
        <AssessmentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AssessmentProvider>
      </body>
    </html>
  );
}
