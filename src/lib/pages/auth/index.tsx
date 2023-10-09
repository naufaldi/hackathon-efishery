'use client';

import * as React from 'react';

import { Icons } from '@/lib/components/icons';
import { Button } from '@/lib/components/ui/button';
import { cn } from '@/lib/styles/utils';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid w-full gap-6', className)} {...props}>
      <h1 className="text-center text-3xl font-bold">Login</h1>

      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={(e) => onSubmit(e)}
      >
        {isLoading ? (
          <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.Google className="mr-2 h-4 w-4" />
        )}{' '}
        Google
      </Button>
    </div>
  );
}
