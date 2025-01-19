import React, { useState } from "react";
import "./App.css";
import defaultImage from "../src/assets/goat-p.webp";
import hoverImage from "../src/assets/trump-hover.webp";

import ticker from "../src/assets/$GPOTUS.svg";
import telegram from "../src/assets/telegram.png";
import xlogo from "../src/assets/twitter.png";
import dexLogo from "../src/assets/dex-screener-logo-png_seeklogo-527276.png"
import copy from "../src/assets/copy.svg";
import { FaRegCopy } from "react-icons/fa";

const App = () => {
  const [copied, setCopied] = useState(false);

  const paragraphText = "HcFcRdPV66y7Vv9dQVD4a4uPQR4mpBHyfzkFGUFfmoon";

  const handleCopy = () => {
    navigator.clipboard.writeText(paragraphText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
    });
  };
  const [isActive, setIsActive] = useState(false); // Tracks if the image is in "hover" or "default" state

  const handleClick = () => {
    setIsActive((prev) => !prev); // Toggle between active (hoverImage) and defaultImage on tap
  };

  const handleMouseEnter = () => {
    setIsActive(true); // Show hover image on mouse enter (desktop)
  };

  const handleMouseLeave = () => {
    setIsActive(false); // Revert to default image on mouse leave (desktop)
  };

  const currentImage = isActive ? hoverImage : defaultImage; // Decide the image to display

  return (
    // <div style={{ position: "relative" }} className="bg-back">
    //   <div
    //     className="bg-front"
    //     style={{
    //       height: "100vh",
    //       backgroundColor: "#000",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       flexDirection: "column",
    //     }}
    //   >
    //     <h2
    //       className="heading"
    //       style={{
    //         fontSize: "8vw",
    //         fontWeight: "bolder",
    //         color: "black",
    //         letterSpacing: "3px",
    //         textAlign: "center",
    //       }}
    //     >
    //       <div>The Bitcoin.com</div>
    //     </h2>
    //   </div>
    // </div>
    <>
      <div className="bg-image"></div>
      <div className="row">
        <div className="bg-text col-11 col-md-10 col-lg-8">
          <div className="img-flex">
            <div id="overlay"></div>
            {/* <img src={gpotus} className="img-goat" draggable="false" /> */}
            {/* <img
              src={isHovered ? hoverImage : defaultImage} // Change image on hover
              className="img-goat"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              alt="Hoverable"
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transformOrigin: "bottom", // Scale from the bottom
                transform: isHovered
                  ? "translateX(-50%) scale(1.02)"
                  : "translateX(-50%) scale(1)",
                transition: "transform 0.3s ease, opacity 0.3s ease", // Smooth scaling and fading
              }}
            /> */}
            <div
              style={{
                // position: "relative",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <img
                src={currentImage} // Dynamically switch image based on isActive
                className="img-goat"
                onMouseEnter={handleMouseEnter} // Hover effect (desktop)
                onMouseLeave={handleMouseLeave} // Reset hover effect (desktop)
                onClick={handleClick} // Toggle image on tap (mobile)
                alt="Hoverable or Toggleable"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transformOrigin: "bottom", // Scale from the bottom
                  transform: isActive
                    ? "translateX(-50%) scale(1.02)"
                    : "translateX(-50%) scale(1)",
                  transition: "transform 0.3s ease, opacity 0.3s ease", // Smooth scaling and fading
                  cursor: "pointer", // Indicate that the image is clickable
                }}
              />
            </div>
          </div>

          <div className="content-token">
            <p className="contract desk">
              Contract Address : {paragraphText}
              <button
                onClick={handleCopy}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                  color: copied ? "#ef6604" : "white",
                }}
                title="Copy to clipboard"
              >
                <FaRegCopy />
              </button>
            </p>
            <p className="contract mob">
              Contract Address :<br /> {`${paragraphText.slice(0, 5)}....${paragraphText.slice(-5)}`}
              {/* Contract Address :<br /> {paragraphText} */}
              <button
                onClick={handleCopy}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: copied ? "#ef6604" : "white",
                }}
                title="Copy to clipboard"
              >
                <FaRegCopy />
              </button>
            </p>
            <img src={ticker} className="ticker-coin" />
            <p className="p-text">Greatest President of the United States</p>
            <div className="footer">
              <a href="https://t.me/gpotus">
                <img src={telegram} className="telegram-bg" draggable="false" />{" "}
              </a>
              <a href="https://x.com/gpotus47">
                <img src={xlogo} className="telegram-bg" draggable="false" />
              </a>
              <a href="https://dexscreener.com/solana/8q84o2rzaa1ersgsp1zedfkkiuuzhkzxcsvknkpw67rw">
                <img src={dexLogo} className="telegram-bg" draggable="false"/>
                {/* <h4 className="telegram-bg g-text">$GPOTUS</h4> */}
              </a>
            </div>
          </div>
        </div>
        {/* <div className="bg-text1 col-10 col-md-7">
          <p className="contract">Contract Address : 5436754765....78658965 </p>
          <img src={ticker} className="ticker-coin" />
          <p className="p-text">Greatest President of the United States</p>
          <div className="footer">
            <img src={telegram} className="telegram-bg" draggable="false" />
            <img src={xlogo} className="telegram-bg" draggable="false" />
            <h4 className="telegram-bg g-text">$GPOTUS</h4>
          </div>
        </div> */}
        {/* <div className="bot-text">
          <div class="b-section-marquee-box">
            <h2 class="marquee-text">
              $GPOTUS $GPOTUS $GPOTUS $GPOTUS $GPOTUS $GPOTUS $GPOTUS $GPOTUS
            </h2>
            <h2 class="marquee-text">
              $GPOTUS $GPOTUS $GPOTUS $GPOTUS $GPOTUS $GPOTUS $GPOTUS $GPOTUS
            </h2>
          </div>
        </div> */}

        <div className="bot-text">
          <div className="marquee bot-text">
            <div className="track">
              <div className="content">
                $GPOTUS&nbsp;&nbsp;$GPOTUS&nbsp;&nbsp; $GPOTUS&nbsp;&nbsp;
                $GPOTUS&nbsp;&nbsp; $GPOTUS&nbsp;&nbsp;$GPOTUS&nbsp;&nbsp;
                $GPOTUS&nbsp;&nbsp; $GPOTUS&nbsp;&nbsp;
                $GPOTUS&nbsp;&nbsp;$GPOTUS&nbsp;&nbsp; $GPOTUS&nbsp;&nbsp;
                $GPOTUS&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
