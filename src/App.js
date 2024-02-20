import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, setPassword, setEmail } from "./reducer/user";
import "./App.css";
import { TextField, Button } from "@mui/material";
import Retrait from "./component/Retrait";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    Nom: "",
    Email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    if (name === "Email") {
      dispatch(setEmail(value));
    } else if (name === "Password") {
      dispatch(setPassword(value));
    }
  };

  // Dispatch des actions lorsque le bouton de connexion est cliqué
  const handleLogin = () => {
    dispatch(setEmail(newUser.Email));
    dispatch(setPassword(newUser.password));
    dispatch(login(newUser.Nom));
  };

  console.log(newUser);

  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="outlined-basic"
          label="Nom"
          variant="outlined"
          name="Nom"
          onChange={handleInput}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="Email"
          onChange={handleInput}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleInput}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
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
      <Retrait />
    </div>
  );
}

export default App;
