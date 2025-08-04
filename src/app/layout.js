import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Anti Judol',
  description: 'Bertujuan mengurangi judol di Indonesia',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased select-none`}>
        {children}
      </body>
    </html>
  );
}
