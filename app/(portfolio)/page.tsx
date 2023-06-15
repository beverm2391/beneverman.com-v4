import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import BigText from "@/components/BigText"
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
import { Indicator } from "@/components/portfolio/indicator"
import { Card } from "@/components/ui/card"
import { Links } from "@/components/portfolio/contact"

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

export default async function IndexPage() {
  return (
    <>
      <section className="container max-w-2xl flex flex-col gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-12">
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row items-center gap-6 p-0 border-[0px] border-slate-200 dark:border-gray-700 ring-gray-500 rounded-xl'>
            <HoverCard openDelay={200}>
              <HoverCardTrigger>
                {/* <div className='rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:scale-[1.05]'>
                  <Image src={avatar} alt="Ben Everman" width={50} height={50}
                    className={cn(
                      'rounded-full',
                      // 'border-[2px] ring-[1px] border-blue-500 ring-blue-300',
                      'border-[0px] border-white dark:border-black'
                    )}
                  />
                </div> */}
                <div className='rounded-full hover:ring-2 ring-blue-500/50 transition-all'>
                  <Image src={avatar} alt="Ben Everman" width={50} height={50}
                    className={cn(
                      'rounded-full',
                      // 'border-[2px] ring-[1px] border-blue-500 ring-blue-300',
                      'border-[0px] border-white dark:border-black'
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
              <h1 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
                Ben Everman
              </h1>
              <h3 className='text-base text-gray-600 dark:text-gray-400'>
                Developer and Problem Solver
              </h3>
            </div>
          </div>
          <div>
            <p className=''>
              Hey, I'm Ben. I'm a on a mission to build technology that{' '}
              <span
                className='font-semibold dark:text-gray-100 dark:underline underline-offset-2 text-gray-900'
              >
                improves the lives of others
              </span>
              . My unique skill set combines organizational management and software engineering to solve problems in business, medicine, and more. 
            </p>
            <div className='flex flex-col sm:flex-row gap-6 sm:gap-4 mt-6 justify-between px-2 sm:p-0 sm:items-center'>
              <div className='flex flex-col sm:flex-row gap-4'>
                {/* <Indicator status='active' badge={true}>
                  Available for Consulting
                </Indicator> */}
                <Indicator status='active' badge={true}>
                  Looking for a New Role
                </Indicator>
              </div>
              <Links
                size='md'
              />
            </div>
            <Separator
              className='my-4 sm:mt-4 sm:mb-4'
            />
            <div className='mt-8 flex flex-col gap-4'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                More About Me
              </h3>
              <p className='leading-6'>
                I'm a full-stack developer experienced in Python, TypeScript and React, and with some experience in Machine Learning.  Though I'm technically skilled, my greatest asset is my range. By leveraging my technical skills, my business education, and my unique thought process, I can craft solutions to previously unsolved problems. Rock climber by trade, I'm used to bushwhacking my way through previously unexplored territory. I would be great at an early-stage startup or smaller team focused on innovation/R&D. I'd thrive in a role that required interface between management, engineering, and clinicians or specialists.
              </p>
            </div>
            {/* <div className='mt-8 flex flex-col gap-4 leading-6'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                What I'm Working On
              </h3>
              <p>
                My biggest interest is in medicine, where I hope to build new clinical tools that improve patient outcomes. My first tool used natural language processing to aid pediatricians in screening for depression and other mental illness in adolescents. Now, I'm working on a new tool designed to help clinical geneticists pick the newest and most accurate genetic tests for their patients. I'll upload a writeup 
              </p>
              <p>
                Meanwhile, my close friend Jake and I have a partnership called <ExternalLink href='https://www.evermanhaygood.com'>Everman - Haygood</ExternalLink> where we build open source software, and occasionally consult for clients.
              </p>
              <p>
                Long term, I hope to build a company that leverages machine learning to improve mental health outcomes. An example product might be a machine learning model that collects data from an apple watch app and uses it to predict and prevent depressive episodes or suicidal ideation. As someone with a personal mental health history, this is where my true passion lies.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
