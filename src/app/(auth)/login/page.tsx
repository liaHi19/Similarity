import { NextPage } from "next";
import Link from "next/link";

import AuthForm from "@/components/auth/AuthForm";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Icons } from "@/components/Icons";

import { buttonVariants } from "@/components/ui/Button";

const page: NextPage = () => {
  return (
    <div className="absolute inset-0 mx-auto container h-screen flex flex-col justify-center items-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            className={buttonVariants({ variant: "ghost", className: "w-fit" })}
            href="/"
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <LargeHeading>Welcome Back</LargeHeading>
          <Paragraph>Please Sign in with your google account.</Paragraph>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default page;
