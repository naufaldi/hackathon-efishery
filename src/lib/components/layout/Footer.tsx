import { GoCalendar, GoTasklist, GoPerson } from 'react-icons/go';

import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="bg-base-100/80 fixed bottom-0 left-0 right-0 z-10 w-full ">
      <div className="wrapper mx-auto flex max-w-lg items-center justify-between gap-2 py-2 backdrop-blur-md">
        <Button variant="ghost" className="p-2">
          <GoCalendar className="h-6 w-6" />
        </Button>
        <Button variant="ghost" className="p-2">
          <GoTasklist className="h-6 w-6" />
        </Button>
        <Button variant="ghost" className="p-2">
          <GoPerson className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
