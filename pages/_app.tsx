import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WalletBalanceProvider } from "../hooks/useWalletBalance";
import React from 'react'; import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
require("@solana/wallet-adapter-react-ui/styles.css");


const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <WalletConnectionProvider>
        <WalletBalanceProvider>
          <Component {...pageProps} />
        </WalletBalanceProvider>
      </WalletConnectionProvider>
    </RecoilRoot>
  );
}
export default MyApp;
