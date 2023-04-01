import { getServerSession } from "next-auth";
import Link from "next/link";

import SignInButton from "@/components/SignInButton";
import SignOutButton from "./SignOutButton";

import { buttonVariants } from "@/ui/Button";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {}

const Navbar = async ({}) => {
  const session = await getServerSession();

  return (
    <div className="fixed z-50 top-0 right-0 left-0 bg-blur-sm bg-white/75 dark:bg-slate-900 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <nav className="container max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Similarity API
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
