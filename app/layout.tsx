import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Noto_Kufi_Arabic } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { QuotesProvider } from "@/context/quotes-context"
import { LangProvider } from "@/context/lang-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })
const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-kufi-arabic",
})

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "Discover and share inspiring quotes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${notoKufiArabic.variable} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LangProvider>
            <QuotesProvider>
              <div className="flex flex-col min-h-screen">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </div>
              <Toaster />
            </QuotesProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

