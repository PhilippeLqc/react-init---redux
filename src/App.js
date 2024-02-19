import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, setPassword, setEmail } from "./reducer/user";
import "./App.css";
import { TextField, Button } from "@mui/material";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => dispatch(login(e.target.value))}
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(setPassword("password"))}
        >
          Login
        </Button>
        <div>
          <h1>{user}</h1>
          <Button
            variant="contained"
            onClick={() => dispatch(logout())}
            color="error"
          >
            Logout
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
