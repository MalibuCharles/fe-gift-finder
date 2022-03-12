import React from "react";
import Product from "./component/Product";
import Question from "./component/Question";
import { useState, useEffect } from "react";

function App() {
  const [isFirst, setIsFirst] = useState(localStorage.getItem("isfirst") || 'true');
  const [isProduct, setIsProduct] = useState(localStorage.getItem("isproduct") || 'false');
  // const [gender, setGender] = useState();
  // const [age, setAge] = useState();

  return (
    <div>
      {isProduct === 'true' ? (
        <Product isProduct={isProduct} setIsProduct={setIsProduct} />
      ) : (
        <Question
          isProduct={isProduct}
          setIsProduct={setIsProduct}
          isFirst={isFirst}
          setIsFirst={setIsFirst}
        />
      )}
    </div>
  );
}

export default App;
