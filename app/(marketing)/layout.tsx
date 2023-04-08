import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"
import { Toggle } from "@/components/darkmodetoggle"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 dark:border-b-slate-800 py-4">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            {/* <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
            >
              Login
            </Link> */}
            <Toggle/>
          </nav>
        </div>
      </header>
      {/* <RollingMenu/> */}
      <main className="flex-1 min-h-[calc(100vh-4rem)]">{children}</main>
      <SiteFooter/>
    </div>
  )
}
