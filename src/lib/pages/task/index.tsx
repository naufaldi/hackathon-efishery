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
import { Button } from '@/lib/components/ui/button';
import { Card } from '@/lib/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/components/ui/dialog';
import { Label } from '@/lib/components/ui/label';
import { kpi } from '@/lib/constant/kpi';
import { cn } from '@/lib/styles/utils';
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
      <div className="col-span-12">
        <h4 className="text-lg">Increase Revenue</h4>
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
                        return (
                          <Dialog>
                            <DialogTrigger>
                              {' '}
                              <Card
                                key={items.code}
                                className="col-span-12 flex items-center justify-between bg-slate-600 px-5 py-3"
                              >
                                <div className="w-full max-w-[90%] text-left">
                                  <p className="text-sm">{items.description}</p>
                                </div>
                                <Label
                                  className={cn(
                                    'rounded-sm  px-2 py-1 text-[10px] text-black',
                                    items.status === 'DONE' && 'bg-green-500',
                                    items.status === 'ONGOING' && 'bg-blue-500',
                                    items.status === 'TODO' && 'bg-slate-700'
                                  )}
                                >
                                  {items.status}
                                </Label>
                              </Card>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  Are you sure change status?
                                </DialogTitle>
                                <DialogDescription className="flex flex-row items-center justify-evenly gap-2 pt-4">
                                  <Button size="sm" className="text-xs">
                                    {' '}
                                    TODO{' '}
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-blue-500 text-xs"
                                  >
                                    {' '}
                                    ONGOING{' '}
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-green-500 text-xs"
                                  >
                                    {' '}
                                    DONE{' '}
                                  </Button>
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
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
