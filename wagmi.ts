import { createConfig, http } from 'wagmi';

import { baseSepolia, bscTestnet } from 'wagmi/chains';
import { injected, metaMask } from 'wagmi/connectors';

export const config = createConfig({
  chains: [bscTestnet],
  connectors: [injected()],
  ssr: true,
  multiInjectedProviderDiscovery: false,
  transports: {
    [bscTestnet.id]: http()
  }
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
