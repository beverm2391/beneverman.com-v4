"use client"

import * as React from "react"
import { toast } from "@/hooks/use-toast"

import { cn } from "@/lib/utils"

interface DocsSearchProps extends React.HTMLAttributes<HTMLFormElement> {}

export function DocsSearch({ className, ...props }: DocsSearchProps) {
  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    return toast({
      title: "Not implemented",
      description: "We're still working on the search.",
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative w-full", className)}
      {...props}
    >
      <input
        type="search"
        placeholder="Search documentation..."
        className="block h-8 w-full appearance-none rounded-md border border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-gray-800/50 py-2 px-3 text-sm placeholder:text-slate-400 focus:border-neutral-300 dark:focus:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 focus:ring-offset-1 sm:w-64 sm:pr-12"
      />
      <kbd className="pointer-events-none absolute top-1.5 right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-white dark:bg-neutral-900 px-1.5 font-mono text-[10px] border-slate-200 dark:border-slate-600 font-medium text-slate-600 dark:text-slate-200 opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </form>
  )
}
