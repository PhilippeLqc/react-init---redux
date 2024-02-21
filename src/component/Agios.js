import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAmount, setDecouvert } from "../reducer/user";
import { TextField, Button } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import "./Agios.css";

function Agios() {
  const dispatch = useDispatch()
  const [agios, setAgios] = useState({
    overdraftAmount: Number,
    overdraftTime: Number,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value);
    setAgios({ ...agios, [name]: numericValue });
    if (name === "overdraftAmount") {
      setValidationError({
        ...validationError,
        overdraftAmount: (numericValue !== 0 && numericValue < 100) || numericValue > 2000
      });
      dispatch(setDecouvert(numericValue));
    } else if (name === "overdraftTime") {
      setValidationError({
        ...validationError,
        overdraftTime: numericValue < 1 || numericValue > 365,
      });
      dispatch(setAmount(numericValue));
    }
  }
  const [agiosResult, setAgiosResult] = useState(null);
  const [validationError, setValidationError] = useState({
    overdraftAmount: false,
    overdraftTime: false,
  });

  const handleAgios = () => {
    if (agios.overdraftAmount === null || !agios.overdraftTime) {
      setAgiosResult(null);
      return
    }

    if (!validationError.overdraftAmount && !validationError.overdraftTime) {
      if (agios.overdraftAmount === 0) {
        setAgiosResult("Découvert non autorisé => pas d'agios");
        return;
      }

      const result = agios.overdraftAmount * agios.overdraftTime * 0.1 / 365;
      setAgiosResult("Le montant total des intérêts : " + result.toFixed(2) + " €");
    }
  };

  return (
    <div className="agios-container">
      <h2>Agios</h2>
      <div>
        <TextField
          id="outlined-basic"
          label="Montant du découvert"
          variant="outlined"
          name="overdraftAmount"
          onChange={handleInput}
          error={validationError.overdraftAmount}
          helperText={
            validationError.overdraftAmount
              ? "Montant du découvert doit être entre 100 et 2000"
              : ""
          }
        />
        <TextField
          id="outlined-basic"
          label="Durée d'utilisation du découvert"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                €
              </InputAdornment>
            ),
          }}
          variant="outlined"
          name="overdraftTime"
          onChange={handleInput}
          error={validationError.overdraftTime}
          helperText={
            validationError.overdraftTime
              ? "Durée doit être entre 1 et 365 jours"
              : ""
          }
        />
      </div>

      <Button variant="contained" color="primary" onClick={handleAgios}>
        Calculer les agios
      </Button>
      {agiosResult && (
        <p>{agiosResult}</p>)}
    </div>
  );
}

export default Agios;
