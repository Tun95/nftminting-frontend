import {
  Fa6SolidRocket,
  MaterialSymbolsPlayCircle,
} from "../../../assets/icons/Index";
import "./styles.scss";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div className="introduction">
      <div className="container l_flex">
        <div className="content">
          <div className="header_text">
            <div className="header">
              <h1>
                {" "}
                <TypeAnimation
                  sequence={[
                    "Discover & Collect Extraordinary NFTs",
                    5000,
                    "Discover & Collect Unique Digital Art",
                    5000,
                    "Discover & Collect Rare Collectibles",
                    5000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ display: "inline-block" }}
                />
              </h1>
            </div>
            <div className="text">
              <p>
                Enter the world of digital art and collectibles. Explore unique
                NFTs created by artists worldwide.
              </p>
            </div>
          </div>
          <div className="btns l_flex">
            <div className="start_btn">
              {" "}
              <a href="/#intro" className="main_btn l_flex">
                <Fa6SolidRocket className="icon" />
                <h5>Start Creating</h5>
              </a>
            </div>
            <div className="watch_btn">
              <button className="main_btn l_flex">
                <MaterialSymbolsPlayCircle className="icon" />
                <h5>Watch Demo</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
