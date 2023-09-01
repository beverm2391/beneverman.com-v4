import { Card } from "@/components/card";
import ExternalLink from "@/components/ExternalLink";
import { Links } from "@/components/portfolio/contact"

export default function Home() {
    return (
        <section className="container max-w-2xl flex flex-col gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-12">
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col'>
                    <h2 className="text-7xl font-display bg-gradient-to-tr dark:from-white dark:via-zinc-200 dark:to-white from-black via-zinc-800 to-black bg-clip-text text-transparent">
                        Ben Everman
                    </h2>
                    {/* <div className='flex flex-row gap-2 mt-4'>
                        <Links
                            size='md'
                        />
                    </div> */}
                </div>
                <div>
                    <ul className='list-disc ml-4 leading-8'>
                        <li>See my public code <ExternalLink href="/" arrow={false}>here</ExternalLink>.</li>
                        <li>Read about my experiments <ExternalLink href="/blog" arrow={false}>here</ExternalLink>.</li>
                        <li>Read my resume <ExternalLink href="/" arrow={false}>here</ExternalLink>.</li>
                        {/* <li>Email me at <ExternalLink href="mailto:evermanben@gmail.com" arrow={false}>evermanben@gmail.com</ExternalLink>.</li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}