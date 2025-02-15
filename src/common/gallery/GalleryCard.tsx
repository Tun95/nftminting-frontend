import { Link } from "react-router-dom";
import s1 from "../../assets/home/s1.png";

interface GalleryCardProps {
  nftId: number;
  img: string;
  title: string;
  status: string;
  description: string;
}

function GalleryCard({
  nftId,
  img,
  title,
  status,
  description,
}: GalleryCardProps) {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = s1; // Fallback image if the NFT image URL is invalid
  };

  return (
    <div className={`list_items ${status === "new" && "new"}`}>
      <div className="img_new_pallet">
        <div className="img">
          <Link to={`/success/${nftId}`}>
            <img src={img} alt={title} onError={handleImageError} />
          </Link>
        </div>
        {status === "new" && (
          <div className="pallet">
            <small> New</small>
          </div>
        )}
      </div>
      <div className="title_description">
        {" "}
        <div className="title">
          <Link to={`/success/${nftId}`}>
            {" "}
            <h4>{title}</h4>
          </Link>
        </div>
        <div className="description">
          <small>
            <p>{description}</p>
          </small>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
