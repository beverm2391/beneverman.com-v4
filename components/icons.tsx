import {
  AlertTriangle,
  ArrowRight,
  Code,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  Github,
  HelpCircle,
  Image,
  Loader2,
  LucideProps,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  Trash,
  Twitter,
  User,
  X,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo(props: LucideProps) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="24" width="24" {...props} 
        viewBox="0 0 30 30">
        <path fill='currentColor' d="M 17 2 A 3 3 0 0 0 14 5 A 3 3 0 0 0 15.292969 7.4609375 L 14.054688 12.001953 A 4 4 0 0 0 14 12 A 4 4 0 0 0 11.560547 12.837891 L 7.84375 9.9453125 A 3 3 0 0 0 8 9 A 3 3 0 0 0 5 6 A 3 3 0 0 0 2 9 A 3 3 0 0 0 5 12 A 3 3 0 0 0 6.6171875 11.523438 L 10.332031 14.414062 A 4 4 0 0 0 10 16 A 4 4 0 0 0 10.681641 18.228516 L 7.1308594 22.222656 A 3 3 0 0 0 6 22 A 3 3 0 0 0 3 25 A 3 3 0 0 0 6 28 A 3 3 0 0 0 9 25 A 3 3 0 0 0 8.625 23.552734 L 12.175781 19.558594 A 4 4 0 0 0 14 20 A 4 4 0 0 0 15.822266 19.556641 L 19.375 23.552734 A 3 3 0 0 0 19 25 A 3 3 0 0 0 22 28 A 3 3 0 0 0 25 25 A 3 3 0 0 0 22 22 A 3 3 0 0 0 20.869141 22.222656 L 17.318359 18.226562 A 4 4 0 0 0 18 16 A 4 4 0 0 0 17.998047 15.947266 L 22.535156 14.708984 A 3 3 0 0 0 25 16 A 3 3 0 0 0 28 13 A 3 3 0 0 0 25 10 A 3 3 0 0 0 22.007812 12.779297 L 17.46875 14.017578 A 4 4 0 0 0 15.982422 12.53125 L 17.222656 7.9882812 A 3 3 0 0 0 20 5 A 3 3 0 0 0 17 2 z"></path>
      </svg>
    )
  },
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
}
