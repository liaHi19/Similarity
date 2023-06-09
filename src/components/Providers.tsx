"use client";
import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

interface IProviders {
  children: ReactNode;
}

const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
      <div className="h-40 md:hidden" />
    </ThemeProvider>
  );
};

export default Providers;
