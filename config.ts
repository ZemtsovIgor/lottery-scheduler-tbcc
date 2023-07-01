export default {
  Lottery: {
    mainnet: "0x106b1f4a05f3a6bf80ebaa46e9725b7a89d23c8a",
    testnet: "0x5790c3534F30437641541a0FA04C992799602998",
  },
  Chainlink: {
    Oracle: {
      // Documentation: https://docs.chain.link/docs/binance-smart-chain-addresses/
      mainnet: "0xcbb98864ef56e9042e7d2efef76141f15731b82f",
      testnet: "0xcbb98864ef56e9042e7d2efef76141f15731b82f",
    },
    VRF: {
      // Documentation: https://docs.chain.link/docs/vrf-contracts/f
      KeyHash: {
        mainnet: "0xc251acd21ec4fb7f31bb8868288bfdbaeb4fbfec2df3735ddbd4f7dc8d60103c",
        testnet: "0xcaf3c3727e033261d383b315559476f48034c13b18f8cafed4d871abe5049186",
      },
    },
  },
  Ticket: {
    Price: {
      mainnet: 10,
      testnet: 1,
    },
    Precision: {
      mainnet: 2,
      testnet: 2,
    },
  },
  Discount: {
    mainnet: 2000,
    testnet: 2000,
  },
  Rewards: {
    mainnet: [250, 375, 625, 1250, 2500, 5000],
    testnet: [250, 375, 625, 1250, 2500, 5000],
  },
  Treasury: {
    mainnet: 200,
    testnet: 200,
  },
};
