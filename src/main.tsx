import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./utilities/configs/config.ts";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <Router>
    <HelmetProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <StrictMode>
              <App />
            </StrictMode>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </HelmetProvider>
  </Router>
);
