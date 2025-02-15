import * as yup from "yup";

// Validation Schema
export const mintnftSchema = yup.object().shape({
  nftName: yup.string().required("NFT Name is required"),
  nftDescription: yup.string().required("Description is required"),
  nftImageUrl: yup
    .string()
    .url("Invalid URL")
    .required("Image URL is required"),
});
