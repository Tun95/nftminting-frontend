import "./styles.scss";
import GalleryCard from "./GalleryCard";
import { useAccount } from "wagmi";
import axios from "axios";
import { useEffect, useState } from "react";
import { request } from "../../base url/BaseUrl";
import { Fade } from "react-awesome-reveal";
import LoadingBox from "../../utilities/message loading/LoadingBox";
import MessageBox from "../../utilities/message loading/MessageBox";

interface NFT {
  nftId: number;
  nftName: string;
  nftDescription: string;
  nftImageUrl: string;
  userWalletAddress: string;
}

function Gallery() {
  const { address } = useAccount();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(""); // Add an error state

  // Fetch NFTs owned by the connected wallet
  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        if (address) {
          const response = await axios.get(
            `${request}/api/mint/gallery/${address}`
          );
          setNfts(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch NFTs:", error);
        setError("Failed to fetch NFTs. Please try again later."); // Set the error message
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchNFTs();
  }, [address]);

  return (
    <div className="container">
      <div className="gallery_component">
        <div className="content">
          <div className="header">
            <h2>Your NFT Gallery</h2>
          </div>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : nfts.length === 0 ? (
            <span className="not_found l_flex">
              <p>No NFTs found. Mint your first NFT using the widget above.</p>
            </span>
          ) : (
            <Fade cascade damping={0.2}>
              <div className="gallery_cards">
                {nfts.map((nft) => (
                  <GalleryCard
                    key={nft.nftId}
                    nftId={nft.nftId}
                    img={nft.nftImageUrl}
                    title={nft.nftName}
                    status="old"
                    description={nft.nftDescription}
                  />
                ))}
              </div>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
