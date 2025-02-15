import MintForm from "../../components/form/mintnft/MintForm";
import { Helmet } from "react-helmet-async";
import Intro from "../../components/mint home/intro/Intro";
import Gallery from "../../common/gallery/Gallery";

function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>Mint NFT</title>
      </Helmet>
      <div className="home_screen">
        <div className="home_content">
          <Intro />
          <MintForm />
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
