"use client";

import "./globals.css";
import { WagmiConfig } from "wagmi";
import {
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { client, chains } from "../utils";
import Mint from "../components/Mint";
import Balance from "../components/Balance";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-violet-200">
        <header className="text-center p-4 bg-purple-300 shadow-lg">
          <h1 className="text-4xl">Shery Token</h1>
          <p className="text-sm">Mint very vauluable Shery Tokens (ST) :-></p>
        </header>
        <WagmiConfig client={client}>
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
          >
            <div className="flex ">
              <div className="mx-auto py-2">
                <ConnectButton />
              </div>
            </div>
            {children}
            <Mint />
            <Balance />
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
