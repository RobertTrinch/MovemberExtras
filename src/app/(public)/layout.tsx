import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core'

export const metadata = {
  title: 'Movember Extras',
  description: 'MoExtras: A collection of extra features to help fundraise for Movember',
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
        <title>Movember Extras</title>
        <meta name="title" content="Movember Extras" />
        <meta name="description" content="MoExtras: A collection of extra features to help fundraise for Movember, such as Alerts Overlay and Goal Progress!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moextras.trinch.net" />
        <meta property="og:title" content="Movember Extras" />
        <meta property="og:description" content="MoExtras: A collection of extra features to help fundraise for Movember, such as Alerts Overlay and Goal Progress!" />
        <meta property="og:image" content="https://moextras.trinch.net/apple-touch-icon.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://moextras.trinch.net" />
        <meta property="twitter:title" content="Movember Extras" />
        <meta property="twitter:description" content="MoExtras: A collection of extra features to help fundraise for Movember, such as Alerts Overlay and Goal Progress!" />
        <meta property="twitter:image" content="https://moextras.trinch.net/apple-touch-icon.png" />
        <meta name="keywords" content="movember,movemberextras,moextras,movember extras,movember overlays" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="language" content="English" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider forceColorScheme='dark' theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
