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
import { cn } from '@/shared/lib/utils'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { title, showBackButton, showNavMenu } = getHeaderConfig(pathname)
  const { isOpen, setIsOpen } = useDrawer()

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 flex w-full items-center gap-2 bg-white px-5 py-3 sm:left-[calc(50vw-250px)] sm:w-[500px]',
          { 'bg-[#FAFAFA]': pathname === '/' || pathname === '/search' },
        )}
      >
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
              <BellIcon className="w-6"/>
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
