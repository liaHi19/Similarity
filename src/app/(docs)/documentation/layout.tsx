import { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return <section className="pt-20">{children}</section>;
};

export default Layout;
