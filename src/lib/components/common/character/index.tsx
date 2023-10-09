import Image from 'next/image';
import { GoHeartFill, GoStarFill, GoArchive } from 'react-icons/go';

const Character = () => {
  const health = 50;
  const experience = 25;
  const quest = 10;
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <Image
          src="/assets/char/avatar-01.png"
          height={300}
          width={300}
          alt="Avatar 01"
        />
      </div>
      <div className="col-span-8 flex flex-col gap-4">
        <div className="flex w-full items-center gap-4">
          <GoHeartFill className="h-5 w-5 fill-red-600" />
          <div className="flex  flex-grow flex-col">
            <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-3 rounded-full bg-red-600"
                style={{ width: `${health}%` }}
              />
            </div>
            <div className="mt-2 flex w-full justify-between">
              <p className="text-xs">{health}/50</p>
              <p className="text-xs">Health</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <GoStarFill className="h-5 w-5 fill-yellow-600" />
          <div className="flex  flex-grow flex-col">
            <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-3 rounded-full bg-yellow-600"
                style={{ width: `${experience}%` }}
              />
            </div>
            <div className="mt-2 flex w-full justify-between">
              <p className="text-xs">{experience}/100</p>
              <p className="text-xs">Experience</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <GoArchive className="h-5 w-5 fill-blue-600" />
          <div className="flex  flex-grow flex-col">
            <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-3 rounded-full bg-blue-600"
                style={{ width: `${quest}%` }}
              />
            </div>
            <div className="mt-2 flex w-full justify-between">
              <p className="text-xs">{quest}/20</p>
              <p className="text-xs">Quest</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div>
          <p className="text-lg">Level 1</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
