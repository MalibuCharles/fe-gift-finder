// import UserList from './scenes/UserList';
// import Product from "./component/Product";
// import Question from "./component/Question";
// import React, { useState, useEffect } from "react";
// import ButtonAppBar from './component/Menubar'

// export default function Main ({token, setIsUser, setToken}) {
//     const [isFirst, setIsFirst] = useState(localStorage.getItem("isfirst") || 'true');
//     const [isProduct, setIsProduct] = useState(localStorage.getItem("isproduct") || 'false');
//     return (
//         <ButtonAppBar/>
//           {isProduct === 'true' 
//           ? (
//             <Product isProduct={isProduct} setIsProduct={setIsProduct} age={age} />
//           ) : (
//             <Question
//               isProduct={isProduct}
//               setIsProduct={setIsProduct}
//               isFirst={isFirst}
//               setIsFirst={setIsFirst}
//               setAge={setAge}
//               age={age}
//             />
//           )}
    
// }