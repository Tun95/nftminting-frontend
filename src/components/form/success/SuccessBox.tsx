import { FlowbiteShareNodesSolid } from "../../../assets/icons/Index";
import "./styles.scss";
import DoneIcon from "@mui/icons-material/Done";
import logo from "../../../assets/home/logo.png";
import { RWebShare } from "react-web-share";
import { pageURL } from "../../../base url/BaseUrl";
import { useNavigate } from "react-router-dom";
import s1 from "../../../assets/home/s1.png";

interface NFT {
  nftId: number;
  nftName: string;
  nftDescription: string;
  nftImageUrl: string;
}

interface SuccessBoxProps {
  nft: NFT;
}

function SuccessBox({ nft }: SuccessBoxProps) {
  const navigate = useNavigate();

  // Handle "Mint Another" button click
  const handleMintAnother = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="mint_form_box mint_success_form_box l_flex">
        <div className="mint_content_box mint_success_content_box">
          <div className="menu_header l_flex">
            <div className="mark_icon l_flex">
              <DoneIcon className="icon" />
            </div>
            <div className="head">
              <h2>NFT Minted Successfully!</h2>
            </div>
            <div className="text">
              <small>
                <p>Your NFT has been created and added to your collection</p>
              </small>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img
                src={nft.nftImageUrl || s1}
                alt={nft.nftName}
                onError={(e) => {
                  e.currentTarget.src = s1; // Fallback image
                }}
              />
            </div>
            <div className="fields">
              <div className="gen_field nft_name">
                <div className="label">
                  <small>NFT Name</small>
                </div>
                <div className="text">
                  <h5>{nft.nftName}</h5>
                </div>
              </div>
              <div className="gen_field description">
                <div className="label">
                  <small>Description</small>
                </div>
                <div className="text">
                  <small>
                    <p>{nft.nftDescription}</p>
                  </small>
                </div>
              </div>
              <div className="gen_field nft_id">
                <div className="label">
                  <small>NFT ID</small>
                </div>
                <div className="text">
                  <p>#{nft.nftId}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btns a_flex">
            <div className="left">
              <RWebShare
                data={{
                  text: `Check out my new NFT: ${nft.nftName}`,
                  url: `${pageURL}/success/${nft.nftId}`,
                  title: nft.nftName,
                }}
              >
                <button className="main_btn l_flex">
                  <FlowbiteShareNodesSolid className="icon" />
                  <p>Share</p>
                </button>
              </RWebShare>
            </div>
            <div className="right">
              <button className="main_btn l_flex" onClick={handleMintAnother}>
                <img src={logo} alt="logo_icon" className="logo_icon" />
                <p>Mint Another</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessBox;
