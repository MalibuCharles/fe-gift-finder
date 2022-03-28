import React from "react";
import UserList from './scenes/UserList';
import Product from "./component/Product";
import Question from "./component/Question";
import { useState, useEffect } from "react";
import ButtonAppBar from './component/Menubar'
// import Login from "./scenes/Login";
// import Signup from "./scenes/Signup";

import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth'
import { app } from './ConnectAuth'

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account',
})
const auth = getAuth(app)


function App() {
  const [isFirst, setIsFirst] = useState(localStorage.getItem("isfirst") || 'true');
  const [isProduct, setIsProduct] = useState(localStorage.getItem("isproduct") || 'false');
  // const [gender, setGender] = useState();
  const [age, setAge] = useState('');
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();
  useEffect(() => {
    const myToken = localStorage.getItem('token')
    setToken(myToken)
  }, [])
  

  const handleGoogleLogin = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				setIsUser(result.user)
			})
			.catch(alert)
	}

  const handleSignOut = () => {
		signOut(auth)
	}

  
  useEffect(() => {
    onAuthStateChanged(auth, u => {
      setIsUser(u)
      console.log(u)
    })
  }, [isUser])


  return (
    <div >
          <ButtonAppBar handleSignOut={handleSignOut} isUser={isUser} handleGoogleLogin={handleGoogleLogin}/>

      {isProduct === 'true' ? (
        <Product isProduct={isProduct} setIsProduct={setIsProduct} age={age} />
      ) : (
        <Question
          isProduct={isProduct}
          setIsProduct={setIsProduct}
          isFirst={isFirst}
          setIsFirst={setIsFirst}
          setAge={setAge}
          age={age}
        />
      )}
      <section>
      {/* {!token
          ? isUser
              ? <Login setToken={setToken} setIsUser={setIsUser} />
              : <Signup setToken={setToken} setIsUser={setIsUser} />
          : <UserList token={token} setToken={setToken} />
      } */}
    </section>
    </div>
    
  );


  
}



export default App;
