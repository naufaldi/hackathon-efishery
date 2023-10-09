import { ArrowRight } from 'lucide-react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { Button } from '@/lib/components/ui/button';
import { Label } from '@/lib/components/ui/label';

const Profile: NextPage = () => {
  return (
    <div className="grid w-full grid-cols-12 gap-4">
      <div className="col-span-12 flex items-center">
        <div className="relative mr-4 h-16 w-16 rounded-full bg-slate-800">
          <Image
            src="/assets/char/avatar-01.png"
            height={300}
            width={300}
            alt="Avatar 01"
            className="absolute"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg">Ningen</h1>
          <h3 className="text-sm">Mid Frontend</h3>
        </div>
        <Label className="ml-auto rounded-md bg-green-400 px-4 py-2">
          {' '}
          Contributors
        </Label>
      </div>
      <div className="col-span-12 flex flex-col rounded-md bg-slate-800">
        <div className=" w-full px-4 ">
          <div className="flex w-full items-center justify-between border-b border-slate-600 py-2">
            <p>Skill</p>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
        <div className=" w-full px-4 ">
          <div className="flex w-full items-center justify-between  py-2">
            <p>Profile</p>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <Button variant="default" className="mt-4 w-full">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
