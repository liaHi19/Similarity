"use client";
import { ButtonHTMLAttributes, FC } from "react";

import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import { Copy } from "lucide-react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  className,
  valueToCopy,
  ...props
}) => {
  const copyApi = () => {
    navigator.clipboard.writeText(valueToCopy);

    toast({
      title: "Copied!",
      message: "Api Key copied to clipboard",
      type: "success",
    });
  };
  return (
    <Button className={className} {...props} variant="ghost" onClick={copyApi}>
      <Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;
