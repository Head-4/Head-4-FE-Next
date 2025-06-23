'use client'

import { usePathname, useRouter } from 'next/navigation'
import { getHeaderConfig } from '@/lib/constants/headerConfig'
import Link from 'next/link'
import ArrowIcon from '@/assets/ArrowIcon.svg'
import SearchIcon from '@/assets/SearchIcon.svg'
import BellIcon from '@/assets/BellIcon.svg'
import MenuIcon from '@/assets/MenuIcon.svg'

export default function Header() {
  const router = useRouter()
  const pathName = usePathname()
  const { title, showBackButton, showNavMenu } = getHeaderConfig(pathName)

  return (
    <header className="flex items-center gap-2 py-3">
      {showBackButton && (
        <button onClick={router.back}>
          <ArrowIcon />
        </button>
      )}
      <h1 className="typography-H4">{title}</h1>
      {showNavMenu && (
        <nav className="ml-auto">
          <ul className="flex items-center gap-3">
            <li>
              <Link href="/search">
                <SearchIcon />
              </Link>
            </li>
            <li>
              <Link href="/notification">
                <BellIcon />
              </Link>
            </li>
            <li>
              <button>
                <MenuIcon />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
