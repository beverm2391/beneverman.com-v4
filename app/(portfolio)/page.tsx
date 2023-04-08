import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import BigText from "@/components/BigText"
import Contact from "@/components/portfolio/cretu-contact"
import avatar from '@/public/images/avatar.jpg'

import { Callout } from "@/components/callout"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import { randomColor } from "@/lib/randomColor"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import ExternalLink from "@/components/ExternalLink"
import { Badge } from "@/components/badge"
import { cn } from "@/lib/utils"
import GradientText from "@/components/gradienttext"

const content = [
  {
    title: 'AutoDoc',
    description: 'A web app that uses machine learning to automatically generate medical documents.',
    href: '/docs/autodoc',
    type: 'Project',
    date: '2021-06-01',
  },
  {
    title: 'The Ethics of Genome Sequencing',
    description: 'A research paper on the ethical implications of genome sequencing.',
    href: '/blog/ethics-genome-sequencing',
    type: 'Writing',
    date: '2021-05-01',
  },
  {
    title: 'DraftAI',
    description: 'Use AI to draft research papers, blog posts, and more.',
    href: 'https://draftai.com',
    type: 'Project',
    date: '2021-04-01',
  },
]

const quotes = [
  "Where does the drunk look for his keys? The streetlight, because that's where the light is.",
  "Man, my code failed all the unit tests... guess I need to delete them.",
  "I'd rather have a bottle in front of me than a frontal lobotomy.",
]

export default async function IndexPage() {
  return (
    <>
      <section className="container max-w-2xl flex flex-col gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-24">
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row items-center gap-6 p-4 border-[1px] border-slate-200 dark:border-gray-700 dark:ring-1 ring-gray-500 shadow-sm rounded-xl'>
            <HoverCard openDelay={200}>
              <HoverCardTrigger>
                <div className='rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:scale-[1.05]'>
                  <Image src={avatar} alt="Ben Everman" width={50} height={50}
                    className={cn(
                      'rounded-full',
                      // 'border-[2px] ring-[1px] border-blue-500 ring-blue-300',
                      'border-[2px] border-white dark:border-black'
                    )}
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className='w-96 bg-white dark:bg-neutral-800'>
                {/* <h3 className='text-xl font-medium text-gray-900 dark:text-gray-100 mb-2'>Bio:</h3> */}
                <p>I grew up in Greenvile, South Carolina. Now, I live in Atlanta and attend grad school at{' '}
                  <ExternalLink
                    href="https://www.kennesaw.edu/"
                  >
                    Kennesaw State University
                  </ExternalLink>.
                  Outside of school, I'm a full-stack developer focusing on leveraging machine learning to solve problems in healthcare.
                </p>
              </HoverCardContent>
            </HoverCard>
            <div className='flex flex-col'>
              <h1 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                Ben Everman
              </h1>
              <h3 className='text-base text-gray-600 dark:text-gray-400'>
                Developer, Writer, and Problem Solver
              </h3>
            </div>
          </div>
          <div>
            <p className=''>
              Hey, I'm Ben. I'm a on a mission to build technology that{' '}
              <GradientText
                gradient={1}
                className='font-semibold dark:from-amber-500 dark:via-amber-400 dark:to-amber-500 text-gray-900 dark:text-transparent'
              >
                improves the lives of others
              </GradientText>
              . I'm currently finishing up my MBA at Kennesaw State University. I'm also a full-stack developer with a focus on applied ML.
            </p>
          </div>
          {/* <div className='flex flex-row justify-evenly gap-4 items-center text-center'>
            <hr className='w-full border-slate-200 dark:border-gray-700 dark:ring-1 ring-gray-500 shadow-sm rounded-xl' />
            <p className='text-sm italic'>showcase</p>
            <hr className='w-full border-slate-200 dark:border-gray-700 dark:ring-1 ring-gray-500 shadow-sm rounded-xl' />
          </div> */}
          <div className='flex flex-col gap-6 my-4'>
            {content.map((item, i) => (
              <div key={i} className={cn(
                'flex flex-col mb-0',
                i % 2 === 0 && '',
              )}>
                <div className='flex flex-row items-center gap-4 mb-2'>
                  <h3 className={cn(
                    'text-gray-900 dark:text-gray-100',
                    item.type === 'Project' && 'font-medium text-lg',
                    item.type === 'Writing' && 'font-medium text-lg',
                  )}
                  >{item.title}</h3>
                  {/* <Badge
                  className='text-xs'
                  gradient={randomColor()}
                  >
                    {item.type}
                  </Badge> */}
                  <span
                    className={cn(
                      'text-xs px-2 py-1 transition-all rounded-lg font-medium translate-y-[0rem] shadow-sm opacity-90',
                      // 'text-gray-600 dark:text-gray-400 border border-gray-400 dark-border-gray-600',
                      item.type === 'Project' && 'bg-blue-500 text-white',
                      item.type === 'Writing' && 'bg-green-500 text-white',
                    )}
                  >
                    {item.type}
                  </span>
                </div>
                <p className='mb-2 text-gray-800 dark:text-gray-200'>
                  {item.description}
                </p>
                <div>
                  <Link
                    href={item.href}
                    className='text-slate-500 hover:text-slate-300 dark:text-slate-400 dark:hover:text-slate-200'
                  >
                    <span className=''>
                      Read More
                      <Icons.chevronRight className='inline-block w-4 h-4' />
                    </span>
                  </Link>
                </div>
                {i !== content.length - 1 && (
                  <hr className='w-full mt-4 border-slate-200 dark:border-gray-700 shadow-sm rounded-xl' />
                )}
              </div>
            ))}
          </div>
          {/* <div className="flex flex-row items-center gap-6 p-4 border-[1.5px] border-color dark:border-gray-700 dark:ring-1 ring-gray-500  mb-4 shadow-md rounded-xl py-8 px-4">
            <Contact />
          </div> */}
          <div>
            {/* <h3 className='text-xl font-medium text-gray-900 dark:text-gray-100 mb-6'>Quotes I'm Pondering...</h3> */}
          </div>
        </div>
      </section>
    </>
  )
}
