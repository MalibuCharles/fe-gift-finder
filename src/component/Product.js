import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import '../App.css'

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
    <div>
      <h1>Suggested Gift</h1>
      {/* <img
        width="200"
        src="https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_1588xN.3483202701_bj16.jpg"
        alt=""
      /> */}
      <div>
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
    </Button>

                  <br/>
                  <button
                    onClick={findAnother}

                  >Try Another</button>
                  
                  </h2>
              </div>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          setIsProduct("false");
          localStorage.setItem("isproduct", "false");
        }}
      >
        back to question page
      </button>
    </div>
  );
}
