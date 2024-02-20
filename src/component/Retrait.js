import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { setAmount, setDecouvert, setSold } from "../reducer/user";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

function Retrait() {
  const dispatch = useDispatch();
  const [retrait, setRetrait] = useState({
    decouvert: Number,
    amount: Number,
    sold: Number,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value); // Convertir la valeur en nombre
    setRetrait({ ...retrait, [name]: numericValue });
    if (name === "decouvert") {
      dispatch(setDecouvert(numericValue));
    } else if (name === "amount") {
      dispatch(setAmount(numericValue));
    } else if (name === "sold") {
      dispatch(setSold(numericValue));
    }
  };

  const handleRetrait = () => {
    let newSolde;
    let { sold, amount, decouvert } = retrait;
    if (!(sold >= amount)) {
      alert("solde insuffisant");
    } else {
      newSolde = sold - amount;
      alert(`Nouveau solde : ${newSolde}, Découvert restant: ${decouvert}`);

      do {
        const retraitValue = parseFloat(
          prompt(
            "Voulez-vous effectuer un autre retrait ? Entrez le montant ou 0 pour quitter"
          )
        );
        if (retraitValue === 0) {
          break;
        } else if (retraitValue > newSolde + decouvert) {
          alert("solde insuffisant");
        } else {
          newSolde -= retraitValue;
          if (newSolde < 0 || decouvert > 0) {
            decouvert -= Math.abs(newSolde); // Réduire le découvert si le solde devient négatif
            newSolde = 0; // Le solde ne peut pas être négatif
          }
          alert(`Nouveau solde : ${newSolde}, Découvert restant: ${decouvert}`);
        }
      } while (newSolde > 0 || decouvert > 0);
    }
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
