import { Card } from '@/components//ui/card'
import ExternalLink from '@/components/ExternalLink'
import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

type LinksProps = {
    size: 'sm' | 'md' | 'lg' | 'xl'
}

const IconClassName = (props: LinksProps) => {
    return cn(
        props.size === 'sm' && 'w-4 h-4',
        props.size === 'md' && 'w-5 h-5',
        props.size === 'lg' && 'w-6 h-6',
        props.size === 'xl' && 'w-8 h-8',
    )
}

export const Links = (props: LinksProps) => {
    return (
        <div className='links flex flex-row gap-2 text-gray-700 dark:text-gray-400'>
            <ExternalLink
                href={`mailto:${siteConfig.email}`}
                arrow={false}
                underline={false}
                className='hover:text-gray-500 dark:hover:text-gray-500'
            >
                <Icons.Mail 
                    className={IconClassName(props)}
                />
            </ExternalLink>
            <ExternalLink
                href={siteConfig.links.twitter}
                arrow={false}
                underline={false}
                className='hover:text-gray-500 dark:hover:text-gray-500'
            >
                <Icons.twitter 
                    className={IconClassName(props)}
                />
            </ExternalLink>
            <ExternalLink
                href={siteConfig.links.github}
                arrow={false}
                underline={false}
                className='hover:text-gray-500 dark:hover:text-gray-500'
            >
                <Icons.gitHub 
                    className={IconClassName(props)}
                />
            </ExternalLink>
            <ExternalLink
                href={siteConfig.links.linkedin}
                arrow={false}
                underline={false}
                className='hover:text-gray-500 dark:hover:text-gray-500'
            >
                <Icons.Linkedin 
                    className={IconClassName(props)}
                />
            </ExternalLink>
        </div>
    )
}


export const Contact = () => {
    return (
        <Card
            className='p-6 dark:border-gray-500 flex flex-row gap-2'
        >
            <div className='flex flex-col gap-2 justify-between w-full'>
                <p className='text-gray-800 dark:text-gray-200 font-medium'>
                    Connect with me!
                </p>
            </div>
            <Links
                size='lg'
            />
        </Card>
    )
}