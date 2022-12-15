import { GlobalProvider } from '@contexts/global.context';
import '@styles/globals.scss';
import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
    if (typeof window === 'undefined') React.useLayoutEffect = React.useEffect;

    const getLayout = Component.getLayout ?? (page => page);

    return (
        <GlobalProvider>
            <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>
        </GlobalProvider>
    );
}

export default appWithTranslation(App);
