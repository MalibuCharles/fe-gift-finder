import React from "react";

export default function Product({ setIsProduct }) {
    setIsProduct('true');
    localStorage.setItem("isproduct", 'true');

  return (
    <div>
      <h1>Suggested Gift</h1>
      <img width="200" src="https://ahmedbekhit.com/InstaMap.png" alt=""/>
      <button
        onClick={() => {
          setIsProduct('false');
          localStorage.setItem("isproduct", 'false');
        }}
      >
        back to questionpage
      </button>
    </div>
  );
}
