import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import BigText from "@/components/BigText"
import Contact from "@/components/portfolio/cretu-contact"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/shadcn/taxonomy",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="container flex flex-col gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-24">
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>
              Ben Everman
          </h1>
          <p>
            Hey, I'm Ben. I'm a on a mission to build technology that improves the lives of others. I'm currently finishing up my MBA at Kennesaw State University. I'm also a full-stack developer with a focus on applied ML.
          </p>
          <Contact/>
        </div>
      </section>
    </>
  )
}
