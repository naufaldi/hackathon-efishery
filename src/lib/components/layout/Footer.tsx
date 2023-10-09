import Link from 'next/link';
import { GoCalendar, GoTasklist, GoPerson } from 'react-icons/go';

import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="bg-base-100/80 fixed bottom-0 left-0 right-0 z-10 w-full ">
      <div className="wrapper mx-auto flex max-w-lg items-center justify-between gap-2 py-2 backdrop-blur-md">
        <Link href="/dashboard" className="h-8 w-8">
          <Button asChild variant="link" className="p-0">
            <GoCalendar className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/dashboard/task" className="h-8 w-8">
          <Button asChild variant="link" className="p-0">
            <GoTasklist className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/dashboard/profile" className="h-8 w-8">
          <Button asChild variant="link" className="p-0">
            <GoPerson className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
