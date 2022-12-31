import { DefaultLayout } from '@components/layouts/default.layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import { ReactElement } from 'react';
import toast from 'react-hot-toast';

export default function Home() {
    const { t } = useTranslation('common');
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <h1
                    onClick={() => {
                        toast(`Changing theme to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`);
                        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
                    }}
                    className="text-3xl font-bold">
                    {t('greet')}
                </h1>
            </div>
        </>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export async function getServerSideProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
