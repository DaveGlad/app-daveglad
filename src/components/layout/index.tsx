import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default Layout;
