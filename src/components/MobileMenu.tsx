"use client";
import { signOut, useSession } from "next-auth/react";
import { FC, useState } from "react";
import Link from "next/link";

import { toast } from "@/ui/Toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import Button from "@/ui/Button";
import { Icons } from "./Icons";

const MobileMenu: FC = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const signUserOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later.",
        type: "error",
      });
    }
  };
  return (
    <div className="shadow-2xl rounded-md outline outline-2  dark:outline-slate-800 mr-4">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
          <Button variant="ghost">
            <Icons.AlignJustify />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen min-h-[30vh] py-6">
          <DropdownMenuGroup onClick={() => setOpen(false)}>
            <DropdownMenuItem asChild>
              {session ? (
                <Link
                  href="/dashboard"
                  className="w-full flex items-center gap-1.5"
                >
                  <Icons.LayoutDashboard className="mr-2 h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="flex w-full items-center gap-1.5"
                >
                  <Icons.LayoutDashboard className="mr-2 h-5 w-5" />
                  <span>Sign in</span>
                </Link>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href="/documentation"
                className="w-full flex items-center gap-1.5"
              >
                <Icons.Info className="mr-2 h-5 w-5" />
                <span>Docs</span>
              </Link>
            </DropdownMenuItem>
            {session && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signUserOut} className="gap-1.5">
                  <Icons.User className="mr-2 h-5 w-5" />
                  <span>{isLoading ? "Signing out" : "Sign out"}</span>
                  {isLoading ? (
                    <Icons.Loader2 className="animate-spin h-4 w-4" />
                  ) : null}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
