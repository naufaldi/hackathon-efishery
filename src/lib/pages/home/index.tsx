import type { NextPage } from 'next';
import {
  PiArrowFatLinesDownFill,
  PiArrowFatLinesUpFill,
  PiEqualsFill,
} from 'react-icons/pi';

import Character from '@/lib/components/common/character';
import { Card, CardTitle } from '@/lib/components/ui/card';
import { Progress } from '@/lib/components/ui/progress';
import { okr } from '@/lib/constant/okr';
import { determinePriority } from '@/lib/utils/priority';

const Home: NextPage = () => {
  const priorityIcons = {
    High: <PiArrowFatLinesUpFill className="h-4 w-4 text-red-500" />,
    Medium: <PiEqualsFill className="h-4 w-4 text-blue-500" />,
    Low: <PiArrowFatLinesDownFill className="h-4 w-4 text-green-500" />,
  };
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <Character />
      </div>

      <Card className="col-span-12 min-h-[28px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[6px]">
        <div className="w-full rounded-lg bg-black px-2 py-3">
          <CardTitle className="mb-2">Contributor</CardTitle>
          <Progress
            value={30}
            bgIndicator="bg-indigo-400"
            className="h-2 w-[100%]"
          />
        </div>
      </Card>
      {okr
        .slice()
        .sort((a, b) => b.point - a.point)
        .map((item) => {
          const priority = determinePriority(item.point);
          return (
            <Card
              key={item.code}
              className="col-span-12 flex items-center justify-between bg-slate-800 px-2 py-3"
            >
              <h6 className="text-base">{item.description}</h6>
              {priorityIcons[priority]}
            </Card>
          );
        })}
    </div>
  );
};

export default Home;
