import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { cn } from "@/lib/utils"

import { formatDate } from "@/lib/utils"
import PageContent from "@/components/pages/blog-landing"

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container max-w-2xl py-6 lg:py-10">
      <PageContent posts={posts}/>
      {/* <hr className="my-8 border-gray-200" /> */}
    </div>
  )
}
