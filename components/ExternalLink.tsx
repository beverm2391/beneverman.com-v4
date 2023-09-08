import { cn } from '@/lib/utils';

interface Props {
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
  href: string;
  underline?: boolean;
  target? : "_blank" | "_self"
}

export default function ExternalLink({
  href,
  children,
  arrow = true,
  underline = true,
  target = "_blank",
  className,
}: Props) {
  return (
    <>
      <a
        className={cn(
          underline
            ? "underline underline-offset-[3px] hover:bg-[url('/squiggle.svg')] hover:no-underline"
            : '',
          'text-secondary',
          'inline-block',
          className ? className : '',
        )}
        href={href}
        rel="noopener noreferrer"
        target={target}
      >
        {children}
      </a>
      <span>
        {arrow && (
          <svg
            className="ml-0.5 inline-block h-3 w-3"
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
        )}
      </span>
    </>
  );
}
