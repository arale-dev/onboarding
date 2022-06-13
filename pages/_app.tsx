/* eslint-disable react/jsx-props-no-spreading */
import './_global.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
