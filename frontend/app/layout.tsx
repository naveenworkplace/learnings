import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "AI Knowledge Assistant",
  description: "Your personal AI-powered learning assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="min-w-0 flex-1 bg-slate-100">{children}</main>
        </div>
      </body>
    </html>
  );
}
