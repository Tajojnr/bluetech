import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bluetech Gadgets | High-Performance Workstations & Gaming Gear',
  description: 'Workstations, clean setups, gaming laptops, and smartphones for every budget.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-zinc-100 antialiased font-sans selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}