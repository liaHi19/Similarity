import { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return <section className="py-10 px-4">{children}</section>;
};

export default Layout;
