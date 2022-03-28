import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "../App.css";
import RadioGroupRating from "../component/Rating";
import { Howl } from "howler";

export default function Product({ setIsProduct, age }) {
  const [gifts, setGifts] = useState("");
  useEffect(() => {
    fetch(`https://gift-finder-mc.appspot.com/gift/search?age_group=${age}`)
      .then((res) => res.json())
      .then((data) => setGifts(data))
      .catch(console.error);
  }, []);

  const findAnother = () => {
    fetch(`https://gift-finder-mc.appspot.com/gift/search?age_group=${age}`)
      .then((res) => res.json())
      .then((data) => setGifts(data))
      .catch(console.error);
  };

  setIsProduct("true");
  localStorage.setItem("isproduct", "true");

  function playSound() {
    const sound = new Howl({
      src: [`${window.location.origin}/sounds/cha-ching.wav`],
      html5: true,
    });
    sound.play();
  }

  return (
    <div className="main">
      <h1>The Perfect Gift Is ...</h1>

      <div>
        {gifts && (
          <div className="box">
            <img
              width="auto"
              height="300px"
              // className="productImage"
              src={gifts.product.image_url}
              alt=""
            />

            <div className="product-info">
              <div className="productName">{gifts.product.product_name}</div>
              <div className="productPrice">${gifts.product.price}</div>
              <Button
                style={{
                  backgroundColor: "gray",
                  marginTop: "10px",
                  width: "180px",
                }}
                variant="contained"
                href={gifts.product.link}
                target="_blank"
                disableElevation
                onClick={playSound}
              >
                Buy Now!
              </Button>
              &nbsp;
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#F1F1F1",
                  marginTop: "10px",
                  width: "120px",
                  color: "black",
                }}
                onClick={findAnother}
              >
                Try Again
              </Button>
              <div>
                <h5>Rate this gift</h5>
                <RadioGroupRating />
                <br />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#F1F1F1",
                    marginTop: "10px",
                    color: "black",
                  }}
                  onClick={() => {
                    setIsProduct("false");
                    localStorage.setItem("isproduct", "false");
                  }}
                >
                  back to questions
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className="productDescription">
          <p>{gifts.product && gifts.product.description ? gifts.product.description : '...'}</p>
        </div>
      </div>
      {/* <div>
        <h5>Rate this gift</h5>
        <RadioGroupRating />
        <br />
        <Button
          variant="contained"
          style={{ backgroundColor: "#F1F1F1", marginTop: "10px" }}
          onClick={() => {
            setIsProduct("false");
            localStorage.setItem("isproduct", "false");
          }}
        >
          back to question page
        </Button>
      </div> */}
    </div>
  );
}
