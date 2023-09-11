import Link from "next/link"

import { portfolioConfig } from "@/config/portfolio"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav-portfolio"
import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"
import { Toggle } from "@/components/darkmodetoggle"
import RollingMenu from "@/components/RollingMenu"
import { motion } from "framer-motion"
import { useMounted } from "@/hooks/use-mounted"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div>
      <div className="flex min-h-screen mx-auto max-w-2xl flex-col">
        <header className="container sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between border-b-0 border-b-gray-200 dark:border-b-gray-800 py-4 mt-8">
            <MainNav items={portfolioConfig.mainNav} />
            <nav>
              {/* <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
            >
              Login
            </Link> */}
              <Toggle />
            </nav>
          </div>
        </header>
        {/* <RollingMenu/> */}
        <main className="flex-1 min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
      <div className="mx-auto">
        <SiteFooter />
      </div>
    </div>
  )
}
