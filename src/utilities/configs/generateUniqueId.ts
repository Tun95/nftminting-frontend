// Define the type for the `checkId` function
type CheckIdFunction = (id: bigint) => Promise<boolean>;

export const generateUniqueId = async (checkId: CheckIdFunction) => {
  let uniqueId: bigint = BigInt(0); // Initialize with a default value
  let idExists = true;

  while (idExists) {
    uniqueId = BigInt(Math.floor(Math.random() * 1000000)); // Generate a random ID as `bigint`
    idExists = await checkId(uniqueId); // Check if ID exists
  }

  if (uniqueId === BigInt(0)) {
    throw new Error("Failed to generate a unique NFT ID.");
  }

  return uniqueId;
};
