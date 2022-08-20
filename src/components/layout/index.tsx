import React, { FC } from "react";

//!COMPONENTS
import Header from "@components/header";

type Props = {
  children: React.ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
