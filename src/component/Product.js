import React from "react";

export default function Product({ setIsProduct }) {
    setIsProduct('true');
    localStorage.setItem("isproduct", 'true');

  return (
    <div>
      <h1>Suggested Gift</h1>
      <img width="200" src="https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_1588xN.3483202701_bj16.jpg" alt=""/>
      <button
        onClick={() => {
          setIsProduct('false');
          localStorage.setItem("isproduct", 'false');
        }}
      >
        back to question page
      </button>
    </div>
  );
}
