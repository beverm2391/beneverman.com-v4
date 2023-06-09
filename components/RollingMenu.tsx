'use client';

import { Icons } from '@/components/icons';
// import { actions } from '@/data/cmd';
import { actions } from '@/types/cmd';
// import { cn } from '@/lib/className';
import { cn } from '@/lib/utils';
import {
  HomeIcon,
  MoonIcon,
  PencilIcon,
  PlusIcon,
  ComputerDesktopIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

export default function RollingMenu() {
  const [expanded, setExpanded] = useState(false);
  const ref =
    useRef<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>();
  const { resolvedTheme, setTheme } = useTheme();

  const memoizedActions = actions.filter((action) => {
    if (action.section === 'Themes') {
      return action.keywords !== resolvedTheme;
    }
    return true;
  });

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const changeTheme = (theme: string) => {
    if (theme === 'light') {
      setTheme('light');
    } else if (theme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, rotate: -360, scale: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        bounce: 0.5,
        damping: 10,
        delay: i * 0.05,
        type: 'spring',
      },
      x: 0,
    }),
  };

  useEffect(() => {
    if (!expanded) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if ((ref.current as any)?.contains(target)) return;

      setExpanded(false);
    };

    const scrolled = () => {
      setExpanded(false);
    };

    window.addEventListener('click', handleOutsideClick, { passive: true });
    window.addEventListener('scroll', scrolled, { passive: true });

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', scrolled);
    };
  }, [expanded]);

  useEffect(() => {
    const handler = (event: {
      key: string;
      metaKey: boolean;
      preventDefault: () => void;
    }) => {
      if (event.key === 'ArrowLeft' && expanded) {
        event.preventDefault();
      } else if (event.key === 'ArrowDown' && expanded) {
        event.preventDefault();
      } else if (event.key === 'Enter' && expanded) {
        // highlightedTab?.click();
      } else if (event.key === 'k' && event.metaKey) {
        event.preventDefault();
        setExpanded(!expanded);
      } else if (event.key === 'Escape') {
        setExpanded(false);
      }
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  });

  return (
    <nav className="fixed bottom-4 left-2 z-50 sm:left-4 md:left-6">
      <div className="flex items-center" ref={ref as any}>
        <motion.button
          animate={{ rotate: expanded ? 45 : 0 }}
          aria-label="Navigation Menu"
          className="flex flex-col h-12 w-12 select-none items-center justify-center rounded-full bg-black p-3 dark:bg-white"
          onClick={handleClick}
          whileTap={{ scale: 1.1 }}
        >
          <PlusIcon className="h-6 w-6 text-white dark:text-black" />
        </motion.button>
        <AnimatePresence>
          {expanded && (
            <motion.div className="flex space-x-2">
              {memoizedActions.map((action, i) => (
                <motion.div
                  animate="visible"
                  className="mx-0.5 ml-2"
                  custom={i}
                  exit="hidden"
                  initial="hidden"
                  key={i}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  tabIndex={-1}
                  transition={{ bounce: 0.5, damping: 10, type: 'spring' }}
                  variants={itemVariants}
                  whileTap={{
                    scale: 1.1,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 1, 0.5, 1],
                      type: 'tween',
                    },
                  }}
                >
                  <Comp
                    as={
                      action.section === 'Navigation'
                        ? Link
                        : action.section === 'Socials'
                          ? 'a'
                          : 'button'
                    }
                    className={cn(
                      // `bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700`,
                      'flex h-12 w-12 cursor-pointer select-none flex-col items-center space-y-1 p-3 transition-all duration-200',
                      'rounded-full',
                    )}
                    href={action.href ?? undefined}
                    key={i}
                    onClick={
                      action.perform ?? action.section === 'Themes'
                        ? () => changeTheme(action.keywords!)
                        : undefined
                    }
                    style={{
                      backgroundColor: action.color
                    }}
                    tabIndex={0}
                  >
                    {action.keywords === 'home' && (
                      <HomeIcon
                        className={`h-6 w-6`}
                        style = {{
                          color: action.iconColor
                        }}
                      />
                    )}
                    {action.keywords === 'blog' && (
                      <PencilIcon
                        className={`h-6 w-6`}
                        style = {{
                          color: action.iconColor
                        }}
                      />
                    )}
                    {action.keywords === 'github' && (
                      <Icons.gitHub
                        className={`h-6 w-6`}
                        style = {{
                          color: action.iconColor
                        }}
                      />
                    )}
                    {action.keywords === 'twitter' && (
                      <Icons.twitter
                        className={`h-6 w-6`}
                        style = {{
                          color: action.iconColor
                        }}
                      />
                    )}
                    {action.keywords === 'light' && (
                      <SunIcon className={`h-6 w-6`}
                      style = {{
                          color: action.iconColor
                        }} />
                    )}
                    {action.keywords === 'dark' && (
                      <MoonIcon
                        className={`h-6 w-6`}
                        style = {{
                          color: action.iconColor
                        }}
                      />
                    )}
                    {action.keywords === 'system' && (
                      <ComputerDesktopIcon
                        className={`h-6 w-6`}
                        style = {{
                          color: action.iconColor
                        }}
                      />
                    )}
                  </Comp>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function Comp({
  as,
  children,
  ...props
}: {
  [key: string]: any;
  as: any;
  children: React.ReactNode;
}): JSX.Element {
  const Component = as;
  return <Component {...props}>{children}</Component>;
}
