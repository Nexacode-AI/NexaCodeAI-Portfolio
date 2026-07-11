import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const description =
  "Nexacode AI builds production-grade AI chatbots, RAG systems, agentic AI workflows, LLM apps, AI SaaS platforms, and WhatsApp automation, from idea to deployment on AWS, Azure, and GCP.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexacode.ai"),
  title: {
    default: "Nexacode AI: Production-Grade AI Solutions",
    template: "%s | Nexacode AI",
  },
  description,
  keywords: [
    "AI development",
    "agentic AI",
    "RAG",
    "LLM apps",
    "GPT chatbots",
    "AI SaaS",
    "LangChain",
    "LangGraph",
    "WhatsApp automation",
    "full stack AI",
  ],
  authors: [{ name: "Nexacode AI" }],
  openGraph: {
    type: "website",
    title: "Nexacode AI: Production-Grade AI Solutions",
    description,
    siteName: "Nexacode AI",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Nexacode AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexacode AI: Production-Grade AI Solutions",
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
