import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Exo_2 } from 'next/font/google';
import { Metadata } from 'next'

const exo = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo-2',
});

const metadata: Metadata = {
  title: {
    template: '%s • TabiTabi Docs',
    default: 'TabiTabi Docs',
  },
  description: 'Documentation for TabiTabi API and Services',
  openGraph: {
    title: 'TabiTabi Docs',
    description: 'Documentation for TabiTabi API and Services',
    url: 'https://docs.tabitabi.io',
    siteName: 'TabiTabi Docs',
    locale: 'pl_PL',
  }
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pl" className={`${exo.className}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
