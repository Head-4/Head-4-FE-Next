'use client'

import { usePathname, useRouter } from 'next/navigation'
import { getHeaderConfig } from '@/widgets/Header/headerConfig'
import Link from 'next/link'
import ArrowIcon from '@/assets/ArrowIcon.svg'
import SearchIcon from '@/assets/SearchIcon.svg'
import BellIcon from '@/assets/BellIcon.svg'
import MenuIcon from '@/assets/MenuIcon.svg'
import { useDrawer } from '@/widgets/Drawer/useDrawer'
import DrawerMenu from '@/widgets/Drawer/Drawer'

export default function Header() {
  const router = useRouter()
  const pathName = usePathname()
  const { title, showBackButton, showNavMenu } = getHeaderConfig(pathName)
  const { isOpen, setIsOpen } = useDrawer()

  return (
    <>
      <header className="flex items-center gap-2 py-3">
        {showBackButton && (
          <button onClick={router.back}>
            <ArrowIcon />
          </button>
        )}
        <h1 className="typography-H4">{title}</h1>
        {showNavMenu && (
          <div className="ml-auto flex items-center gap-3">
            <Link href="/search">
              <SearchIcon />
            </Link>
            <Link href="/notification">
              <BellIcon />
            </Link>
            <button onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </button>
            <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </header>
    </>
  )
}
