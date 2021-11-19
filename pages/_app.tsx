import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";
import { RecoilRoot } from 'recoil';
const WalletConnectionProvider = dynamic(
  () => import("../components/wallet"),
  {
    ssr: false,
  }
);


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </WalletConnectionProvider>
  )
}

export default MyApp
