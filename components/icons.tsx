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
  Linkedin,
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

import {
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsFillEnvelopeFill,
} from 'react-icons/bs'

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
  gitHub: BsGithub,
  twitter: BsTwitter,
  check: Check,
  Linkedin : BsLinkedin,
  Mail : BsFillEnvelopeFill,
}
