import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maua Makart - Seller Dashboard',
  description: 'Manage your store and products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
