import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col px-4">
      <Header />
      <main className="wrapper mx-auto flex w-full flex-1 items-start pb-[56px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
