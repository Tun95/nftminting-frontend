import { Helmet } from "react-helmet-async";
import Intro from "../../components/mint home/intro/Intro";
import SuccessBox from "../../components/form/success/SuccessBox";
import Gallery from "../../common/gallery/Gallery";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { request } from "../../base url/BaseUrl";
import LoadingBox from "../../utilities/message loading/LoadingBox";
import MessageBox from "../../utilities/message loading/MessageBox";

interface NFT {
  nftId: number;
  nftName: string;
  nftDescription: string;
  nftImageUrl: string;
}

function MintSuccessScreen() {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const [nft, setNft] = useState<NFT | null>(null); // Initialize as `null`
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch NFT data by ID
  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const response = await axios.get(`${request}/api/mint/get/${id}`);
        setNft(response.data);
      } catch (error) {
        setError("Failed to fetch NFT data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNFT();
  }, [id]);
  return (
    <>
      <Helmet>
        <title>Mint Success</title>
      </Helmet>
      <div className="home_screen">
        <div className="home_content">
          <Intro />
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <p>
              <MessageBox variant="danger">{error}</MessageBox>
            </p>
          ) : nft ? (
            <SuccessBox nft={nft} />
          ) : (
            <span className="not_found l_flex">
              <p>NFT not found.</p>
            </span>
          )}
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default MintSuccessScreen;
