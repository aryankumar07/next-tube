import { SidebarTrigger } from "@/components/ui/sidebar"
import { SearchInput } from "./search-input"
import Link from "next/link"
import Image from "next/image"
import { AuthButton } from "@/modules/auth/ui/components/auth-button"

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href={'/'}>
            <div className="p-4 flex items-center gap-1">
              <Image src={'/logo.svg'} width={32} height={32} alt="logo" />
              <p className="text-xl font-semibold tracking-tight">NewTube</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        <div className="flex flex-shrink-0 gap-4 items-center">
          <AuthButton />
        </div>
      </div>
    </nav>
  )
}

export default HomeNavbar
