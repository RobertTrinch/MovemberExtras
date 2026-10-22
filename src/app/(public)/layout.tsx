import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'

const description = 'MoExtras: A collection of extra features to help fundraise for Movember, such a Movember Alert Overlay and Goal Progress Overlay'

export const metadata: Metadata = {
  title: 'Movember Extras',
  description,
  keywords: ['movember', 'movemberextras', 'moextras', 'movember extras', 'movember overlays'],
  openGraph: {
    type: 'website',
    url: 'https://moextras.trinch.net',
    title: 'Movember Extras',
    description,
    images: ['https://moextras.trinch.net/apple-touch-icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movember Extras',
    description,
    images: ['https://moextras.trinch.net/apple-touch-icon.png'],
  },
}

const theme = createTheme({
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider forceColorScheme='dark' theme={theme}>{children}</MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
