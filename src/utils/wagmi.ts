import "@rainbow-me/rainbowkit/styles.css";

import {
  configureChains,
  createClient,
  mainnet,
} from "wagmi";
import { polygonMumbai, localhost } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  googleWallet,
  twitchWallet,
  twitterWallet,
  discordWallet,
  githubWallet,
  facebookWallet,
} from "@zerodevapp/wagmi/rainbowkit";

const projectID = process.env.PROJECT_ID || "";

export const { chains, provider, webSocketProvider } =
  configureChains(
    [mainnet, polygonMumbai, localhost],
    [publicProvider()]
  );

const { connectors: defaultConnectors } = getDefaultWallets(
  {
    appName: "My Rainbow Kit App",
    projectId: "hahaha",
    chains,
  }
);

const socialConnectors = connectorsForWallets([
  {
    groupName: "Social",
    wallets: [
      googleWallet({
        options: { projectId: projectID },
      }),
      twitchWallet({
        options: { projectId: projectID },
      }),
      twitterWallet({
        options: { projectId: projectID },
      }),
      discordWallet({
        options: { projectId: projectID },
      }),
      githubWallet({
        options: { projectId: projectID },
      }),
      facebookWallet({
        options: { projectId: projectID },
      }),
    ],
  },
]);

const connectors = defaultConnectors().concat(
  socialConnectors()
);

export const client = createClient({
  connectors,
  provider,
  autoConnect: true,
  webSocketProvider,
});

