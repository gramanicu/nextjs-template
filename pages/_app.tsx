import '@styles/globals.scss'
import { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React, { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function App ({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  if (typeof window === 'undefined') React.useLayoutEffect = React.useEffect

  const getLayout = Component.getLayout ?? (page => page)

  return <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>
}

export default App
