import { GoFilter, GoSearch, GoPlus } from 'react-icons/go';

import { Button } from '../ui/button';
// import { ThemeToggle } from '@/lib/components/theme-toggle';

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
      <section className="wrapper mx-auto grid grid-cols-12 items-center justify-between gap-2 py-2">
        <div className="col-span-4 flex items-center gap-2">
          <Button variant="ghost" className="p-2">
            <GoFilter className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="p-2">
            <GoSearch className="h-6 w-6" />
          </Button>
        </div>
        <div className="col-span-4">
          <h3 className="text-base font-bold text-white">Quarter Tracking</h3>
        </div>
        <div className="col-span-4 col-end-13 flex items-center">
          <Button variant="ghost" className="ml-auto p-2">
            <GoPlus className="h-6 w-6" />
          </Button>
        </div>
        {/* <div className="ml-auto">
          <ThemeToggle />
        </div> */}
      </section>
    </header>
  );
};

export default Header;
