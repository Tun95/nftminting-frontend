export const contractConfig = {
  address: "0x743f49311a82fe72eb474c44e78da2a6e0ae951c" as `0x${string}`,
  abi: [
    {
      inputs: [
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "string", name: "metadataUrl", type: "string" },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "checkId",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
  ] as const, // Use `as const` for type inference
};
