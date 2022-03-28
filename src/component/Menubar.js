import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Login from "../scenes/Login";
// import Signup from "../scenes/Signup";

export default function ButtonAppBar({
  handleGoogleLogin,
  isUser,
  handleSignOut,
}) {
  return (
    // on click nag function
    // add sign up button the fe top - done

    //  {!token
    //           ? isUser
    //               ? <Login setToken={setToken} setIsUser={setIsUser} />
    //               : <Signup setToken={setToken} setIsUser={setIsUser} />
    //           : <UserList token={token} setToken={setToken} />
    //       }

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          variant="contained"
          style={{ backgroundColor: "hotPink", marginTop: "0px" }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gift Finder
          </Typography>

          {!isUser ? (
            <Button onClick={handleGoogleLogin} color="inherit">
              Login with Google
            </Button>
          ) : (
            <Button onClick={handleSignOut} color="inherit">Sign Out</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
