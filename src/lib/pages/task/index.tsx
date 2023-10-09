import type { NextPage } from 'next';
import {
  PiArrowFatLinesDownFill,
  PiArrowFatLinesUpFill,
  PiEqualsFill,
} from 'react-icons/pi';

import Character from '@/lib/components/common/character';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/lib/components/ui/accordion';
import { Card } from '@/lib/components/ui/card';
import { kpi } from '@/lib/constant/kpi';
import { determinePriority } from '@/lib/utils/priority';
// import { okr } from '@/lib/constant/okr';

const Task: NextPage = () => {
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
      {kpi
        .slice()
        .sort((a, b) => b.point - a.point)
        .map((item, index) => {
          const priority = determinePriority(item.point);
          return (
            <Accordion type="single" collapsible className="col-span-12">
              <AccordionItem
                value={`item-${index}`}
                className="rounded-lg bg-slate-800 px-2 py-3"
              >
                <AccordionTrigger className="text-sm">
                  <div className="flex w-full items-center justify-between px-2 text-left">
                    <p className="w-full max-w-[90%]">{item.description}</p>
                    {priorityIcons[priority]}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-4 flex flex-col gap-2">
                    {item.heads
                      .sort((a, b) => b.point - a.point)
                      .map((items) => {
                        const priorityItem = determinePriority(items.point);

                        return (
                          <Card
                            key={items.code}
                            className="col-span-12 flex items-center justify-between bg-slate-600 px-5 py-3"
                          >
                            <div className="w-full max-w-[90%]">
                              <p className="text-sm">{items.description}</p>
                            </div>
                            {priorityIcons[priorityItem]}
                          </Card>
                        );
                      })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
    </div>
  );
};

export default Task;
