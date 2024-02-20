import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, setAmount, setDecouvert, setSold } from "../reducer/user";
import { TextField, Button, dividerClasses } from "@mui/material";
import { Box } from "@mui/system";

function Retrait() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [retrait, setRetrait] = useState({
    decouvert: "",
    amount: "",
    sold: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRetrait({ ...retrait, [name]: value });
    if (name === "decouvert") {
      dispatch(setDecouvert(value));
    } else if (name === "amount") {
      dispatch(setAmount(value));
    } else if (name === "sold") {
      dispatch(setSold(value));
    }
  };

  const handleRetrait = () => {
    dispatch(setDecouvert(retrait.decouvert));
    dispatch(setAmount(retrait.amount));
    dispatch(setSold(retrait.sold));
    dispatch(login(retrait.Nom));
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-basic"
            label="Découvert"
            variant="outlined"
            name="decouvert"
            onChange={handleInput}
          />
          <TextField
            id="outlined-basic"
            label="Montant"
            variant="outlined"
            name="amount"
            onChange={handleInput}
          />
          <TextField
            id="outlined-basic"
            label="Solde"
            variant="outlined"
            name="sold"
            onChange={handleInput}
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleRetrait}>
          Retrait
        </Button>
      </Box>
    </div>
  );
}

export default Retrait;
