import type { Metadata } from 'next';

import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/styles/utils';

import '@/lib/styles/globals.css';
import { ThemeProvider } from '@/lib/components/theme-provider';

const APP_NAME = 'OKR Tracking';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'OKR Tracking',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://nextarter-tailwind.sznm.dev',
    title: 'OKR Tracking',
    description: 'OKR ',
    images: {
      url: 'https://og-image.sznm.dev/**nextarter-tailwind**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
      alt: 'OKR Tracking og-image',
    },
  },
  twitter: {
    creator: '@f2aldi',
    card: 'summary_large_image',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
