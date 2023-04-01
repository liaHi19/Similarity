"use client";
import { FC, useState } from "react";
import { signOut } from "next-auth/react";

import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const singUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
    setIsLoading(false);
  };
  return (
    <Button onClick={singUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
