import type { NextPage } from 'next';

import Character from '@/lib/components/common/character';
import { Card, CardTitle } from '@/lib/components/ui/card';
import { Progress } from '@/lib/components/ui/progress';
import { okr } from '@/lib/constant/okr';

const Home: NextPage = () => {
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
      {okr.map((item) => (
        <Card key={item.code} className="col-span-12 bg-slate-800 px-2 py-3">
          <h6 className="text-base">{item.description}</h6>
        </Card>
      ))}
    </div>
  );
};

export default Home;
