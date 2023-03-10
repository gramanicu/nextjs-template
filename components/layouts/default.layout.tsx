import Head from 'next/head'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import { ReactNode } from 'react'

type Props = {
    children?: ReactNode;
};

export function DefaultLayout ({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      {/* Head/Meta tags */}
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Ill'p" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Toaster position="top-right">
        {t => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && <button onClick={() => toast.dismiss(t.id)}>X</button>}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      <div className="flex flex-col">
        <div>{children}</div>
      </div>
    </div>
  )
}
