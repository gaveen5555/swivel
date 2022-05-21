import React, { ReactNode } from "react";
import Header from "./src/components/header";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <main role="main">{children}</main>
    </div>
  );
};

export default PageLayout;
