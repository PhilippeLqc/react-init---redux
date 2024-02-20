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
    // - Demandez le montant du découvert (0 s'il n'y a pas découvert autorisé) ;
    // - Demandez le solde en cours ;
    // - Tant que le solde le permet, demandez au client s'il souhaite effectuer un autre retrait. Il saisira la valeur du retrait ou 0 pour quitter ;
    // - Affichez le nouveau solde et le montant du découvert ou "solde insuffisant".
    if (!retrait.sold > retrait.amount) {
      alert("solde insuffisant");
    } else {
      const montant = prompt("Entrez le montant du découvert");
      const solde = prompt("Entrez le solde en cours");
      const retrait = prompt("Entrez le montant du retrait");
      const nouveauSolde = solde - retrait;
      alert(`Nouveau solde : ${nouveauSolde}`);

      //utilisez do while pour demander au client s'il souhaite effectuer un autre retrait en prenant en compte le nouveau solde
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
