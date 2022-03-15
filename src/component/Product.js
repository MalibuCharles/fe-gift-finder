import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import '../App.css';
import RadioGroupRating from '../component/Rating';

export default function Product({ setIsProduct,age }) {
  const [gifts, setGifts] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3005/gift/search?age_group=${age}`)
      .then((res) => res.json())
      .then((data) => setGifts(data))
      .catch(console.error);
  }, []);

  const findAnother = () =>{
    fetch(`http://localhost:3005/gift/search?age_group=${age}`)
      .then((res) => res.json())
      .then((data) => setGifts(data))
      .catch(console.error);

  }

  setIsProduct("true");
  localStorage.setItem("isproduct", "true");



  
  return (  
    <div className="main">

      <h1>Suggested Gift</h1>
      {/* <img
        width="200"
        src="https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_1588xN.3483202701_bj16.jpg"
        alt=""
      /> */}
      <div className="product-image">
        {gifts && (
          <div>
              <div key='0'>
                <h2>
                  <img width="150" src={gifts.product.image_url} alt=""/><br/>
                  {gifts.product.product_name}
                  <br/>
                  ${gifts.product.price}
                  <br/>  
                  
    <Button variant="contained" href={gifts.product.link} disableElevation>
      Buy Now!
    </Button> &nbsp; <Button
                  variant="contained"
                  style={{backgroundColor: "hotPink", marginTop: "10px"}}
                    onClick={findAnother}

                    
                  >Try Another</Button>
                  
                  </h2>
              </div>
          </div>
        )}
      </div>
      <h5>Rate this gift</h5>
      <RadioGroupRating />
      <br>
      </br>
      <Button
      variant="contained"
      style={{backgroundColor: "hotPink", marginTop: "10px"}}
        onClick={() => {
          setIsProduct("false");
          localStorage.setItem("isproduct", "false");
        }}
      >
        back to question page
      </Button>
    </div>
  );
}
