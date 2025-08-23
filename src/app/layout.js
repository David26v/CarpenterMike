import { AppProviders } from '@/components/providers';
import './globals.css';

export const metadata = {
  title: 'Carpenter Mike',
  description: 'Your home renovation specialist in Kelowna, BC, Canada',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
