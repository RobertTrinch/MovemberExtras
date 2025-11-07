import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core'

export const metadata = {
  title: 'Movember Extras',
  description: 'A collection of extra features to help fundraise for Movember',
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
      </body>
    </html>
  )
}
