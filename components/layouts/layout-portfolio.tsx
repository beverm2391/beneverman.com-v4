import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav-portfolio"
import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className='max-w-xl min-h-screen py-8'>
        <header className="sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between">
            <MainNav items={marketingConfig.mainNav} />
          </div>
        </header>
        {/* <RollingMenu/> */}
        <main className="flex-1 mt-12">{children}</main>
      </div>
      <SiteFooter/>
    </div>
  )
}
