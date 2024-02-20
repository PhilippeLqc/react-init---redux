import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, setPassword, setEmail } from "../reducer/user";
import { TextField, Button, Switch } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Ouverture.css";

function Ouverture() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    Nom: "",
    Email: "",
    password: "",
  });
  const [authorized, setAuthorized] = useState(false);

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

  const handleSwitch = () => {
    setAuthorized(!authorized);
  };

  return (
    <div className="Ouverture">
      <header className="Ouverture-header">
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
        <FormControlLabel
          required
          control={<Switch />}
          label="Découvert autorisé?"
          onChange={handleSwitch}
        />
        {authorized && (
          <TextField
            id="outlined-basic"
            label="Montant du découvert"
            variant="outlined"
            name="decouvert"
            onChange={handleInput}
          />
        )}
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
    </div>
  );
}

export default Ouverture;
