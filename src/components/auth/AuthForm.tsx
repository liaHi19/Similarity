"use client";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";

import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import GoogleIcon from "@/ui/GoogleIcon";

import { cn } from "@/lib/utils";

const AuthForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        message: "There was an error login in",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center")}>
      <Button
        isLoading={isLoading}
        className="max-w-sm w-full dark:bg-slate-300"
        onClick={loginWithGoogle}
      >
        {!isLoading && <GoogleIcon />} Google
      </Button>
    </div>
  );
};

export default AuthForm;
