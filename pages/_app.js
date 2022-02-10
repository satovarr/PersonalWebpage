import React from 'react'
import Head from 'next/head'
import 'bootswatch/dist/cosmo/bootstrap.min.css'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My portfolio</title>
                {/* add meta*/}
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp