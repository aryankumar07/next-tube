import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <div className="cursor-pointer">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={'outline'}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none cursor-pointer"
          >
            <UserCircleIcon />
            SignIn
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}
