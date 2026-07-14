import './globals.css';

export const metadata = {
  title: 'Jimmy Adams - Find Your Way Back to Yourself',
  description: 'The Pieces That Made Me Whole. A true story of survival, healing, and discovering wholeness—one piece at a time.',
  keywords: 'memoir, personal growth, healing, purpose, wholeness, faith',
  authors: [{ name: 'Jimmy Adams' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Jimmy Adams - The Pieces That Made Me Whole',
    description: 'A true story of finding your way back to yourself',
    url: 'https://jimmyadamslife.com',
    siteName: 'Jimmy Adams Life',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
