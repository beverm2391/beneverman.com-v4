import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import ExternalLink from "./ExternalLink"

export function SiteFooter() {
  return (
    <footer className="container text-slate-600 dark:text-slate-400">
      <div className="flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 dark:border-t-slate-800 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built wth code from{" "}
            <ExternalLink
              href="https://cretu.dev"
              arrow={false}
              // underline={false}
              className="underline underline-offset-4 font-medium"
            >
              Crețu
            </ExternalLink>
            {" & "}
            <ExternalLink
              href="https://twitter.com/shadcn"
              arrow={false}
              // underline={false}
              className="underline underline-offset-4 font-medium"
            >
              Shadcn
            </ExternalLink>
            . Hosted on{" "}
            <ExternalLink
              href="https://vercel.com"
              arrow={false}
              // underline={false}
              className="underline underline-offset-4 font-medium"
            >
              Vercel
            </ExternalLink>
            . Illustrations by{" "}
            <ExternalLink
              href="https://popsy.co"
              arrow={false}
              // underline={false}
              className="underline underline-offset-4 font-medium"
            >
              Popsy
            </ExternalLink>
            .
          </p>
        </div>
        <p className="text-center text-sm md:text-left">
          The source code is available on{" "}
          <ExternalLink
            href="https://www.github.com/beverm2391"
            arrow={false}
            // underline={false}
            className="underline underline-offset-4 font-medium"
          >
            GitHub
          </ExternalLink>
          .
        </p>
      </div>
    </footer>
  )
}
