import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/scroll-progress";
import CommandPalette from "@/components/command-palette";
import CursorGlow from "@/components/cursor-glow";
import { profile } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milankumar.dev"),
  title: "Milan Kumar — Software Engineer",
  description:
    "Portfolio of Milan Kumar, a Java-focused full-stack developer building CodeNest, Splitwise Expense Manager, and Room Rental Finder. AWS Certified Cloud Practitioner.",
  keywords: [
    "Milan Kumar",
    "Software Engineer",
    "Java Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Milan Kumar" }],
  openGraph: {
    title: "Milan Kumar — Software Engineer",
    description: profile.tagline,
    url: "https://milankumar.dev",
    siteName: "Milan Kumar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Kumar — Software Engineer",
    description: profile.tagline,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <CursorGlow />
          <CommandPalette />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
