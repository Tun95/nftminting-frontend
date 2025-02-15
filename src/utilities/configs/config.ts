import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base, mainnet, sepolia } from "wagmi/chains";
import { http } from "viem";

const projectId = import.meta.env.VITE_REACT_APP_WALLET_CONNETC_ID;
const infuraId = import.meta.env.VITE_REACT_APP_INFURA_PROJECT_ID;

export const config = getDefaultConfig({
  appName: "mintNFT",
  projectId: projectId,
  chains: [mainnet, base, sepolia],
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${infuraId}`),
    [base.id]: http(`https://mainnet.base.org`),
    [sepolia.id]: http(`https://linea-sepolia.infura.io/v3/${infuraId}`), // Use a public RPC if Infura doesn't work
  },
  ssr: true,
});
