function ExternalLink({
    href,
    title,
    website,
    email,
}: {
    email?: string;
    href?: string;
    title: string;
    website?: string;
}) {
    return (
        <span className="block items-center gap-4">
            {website && <p className="text-quaternary">{website}</p>}
            {href && (
                <a
                    className="text-secondary hover:text-primary transition-opacity duration-150"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {title}{' '}
                    <svg
                        className=" inline-block h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            )}
            {email && (
                <p className="text-secondary hover:text-primary transition-opacity duration-150">
                    {title}
                </p>
            )}
        </span>
    );
}

export default function Contact() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <ExternalLink
                href="https://twitter.com/beneverman"
                title="@beneverman"
                website="Twitter"
            />
            <ExternalLink
                href="https://github.com/beverm2301"
                title="beverm2391"
                website="GitHub"
            />
            <ExternalLink
                href="https://linkedin.com/in/beneverman"
                title="Ben Everman"
                website="LinkedIn"
            />
            <ExternalLink
                email="evermanben@gmail.com"
                title="evermanben@gmail.com"
                website="Email"
            />
            <ExternalLink href="#" title="Ben Everman" website="CV" />
        </div>
    );
}