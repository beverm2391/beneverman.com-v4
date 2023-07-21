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
import Carousel from "@/components/portfolio/carousel"

export default async function IndexPage() {
  return (
    <>
      <section className="container max-w-2xl flex flex-col gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-12">
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row items-center gap-6 p-0 border-[0px] border-slate-200 dark:border-gray-700 ring-gray-500 rounded-xl'>
            <div className='rounded-full hover:ring-2 ring-blue-500/50 transition-all'>
              <Image src={avatar} alt="Ben Everman" width={50} height={50}
                className={cn(
                  'rounded-full',
                  // 'border-[2px] ring-[1px] border-blue-500 ring-blue-300',
                  'border-[0px] border-white dark:border-black'
                )}
              />
            </div>
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
                  Available for Consulting
                </Indicator>
              </div>
              <Links
                size='md'
              />
            </div>
            <Separator
              className='my-4 sm:mt-4 sm:mb-4'
            />
            <div className='flex flex-col gap-4'>
              <Card className='flex flex-col gap-4 p-4 dark:border-zinc-500'>
                <p className='leading-6'>
                  I'm currently working to help found a startup {' '}

                  <Badge className='font-semibold text-sm py-1 px-2 max-w-max max-h-max inline-block translate-y-[0rem] dark:translate-[0rem] bg-rose-600'>
                    QuantHive
                  </Badge>
                  {' '} where we're leveraging ML, Deep Learning, Signal Processing, and more to <span className='font-medium'>help Quant funds generate alpha</span>.
                </p>
              </Card>
              {/* <h3 className="font-semibold">Quotes I've Been Pondering:</h3> */}
              {/* <Separator className='my-4 sm:mt-2 sm:mb-4' /> */}
              <div className='grid sm:grid-cols-2 gap-4'>
                <Card className='flex flex-col gap-4 p-4 dark:border-zinc-500 mb-2'>
                  <div>
                    Thanks for stopping by! If you'd like to get in touch, feel free to reach out via{' '}
                    <ExternalLink href='https://twitter.com/beneverman'>Twitter</ExternalLink>, {' '}
                    <ExternalLink href='https://www.linkedin.com/in/beneverman/'>LinkedIn</ExternalLink>, or {' '}
                    <ExternalLink href='mailto:evermanben@gmail.com'>Email</ExternalLink>.
                  </div>
                </Card>
                <Card className='flex flex-col gap-4 p-4 dark:border-zinc-500 mb-2'>
                  <div>
                    Live in{' '}
                    <Badge className='font-semibold text-sm py-[.1rem] px-2 max-w-max max-h-max inline-block translate-y-[-0.1rem] dark:translate-y-[-0.1rem] bg-indigo-600'>
                      Atlanta
                    </Badge>{' '}? My friends and I host a by-weekly{' '}
                    <Badge className='font-semibold text-sm py-[.1rem] px-2 max-w-max max-h-max inline-block translate-y-[-0.1rem] dark:translate-y-[-0.1rem] bg-orange-600'>
                      Hack Night{' '}
                    </Badge>{' '} for tech and non-technical alike. Join our <ExternalLink href='https://leafboats.stuiod/invite'>Slack</ExternalLink> channel or reach out to get connected.
                  </div>
                </Card>
              </div>
              {/* <Carousel /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}