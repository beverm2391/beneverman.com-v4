import { Inter as FontSans } from "next/font/google"
import { Merriweather as FontSerif } from "next/font/google"

import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { absoluteUrl, cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Toaster } from "@/components/ui/toaster"
import Providers from "@/components/providers"
import LocalFont from "next/font/local";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ['Inter var', "Inter", "sans-serif"],
})

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
})

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});


interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ben everman",
    "beneverman",
    "beneverman.com",
    "blog"
  ],
  authors: [
    {
      name: "ben everman",
      url: "https://beneverman.com",
    },
  ],
  creator: "ben everman",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/og.jpg"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@beneverman",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans antialiased",
        fontSans.variable,
        fontSerif.variable,
        calSans.variable,
      )}
      suppressHydrationWarning
    >
      <head />

      <body className={cn("min-h-screen",
        "bg-white text-black",
        // "text-black bg-gradient-to-br from-whit to-white",
        "dark:bg-gradient-to-br dark:from-soft-black dark:via-zinc-900 dark:to-soft-black dark:text-white",
        "motion-reduce:transform-none motion-reduce:transition-none"
      )}>
        <Providers>
          {children}
          <Analytics />
          <Toaster />
        </Providers >
      </body>

    </html>
  )
}
