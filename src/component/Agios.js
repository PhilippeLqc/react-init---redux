import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, setAmount, setDecouvert, setSold } from "../reducer/user";
import { TextField, Button, dividerClasses } from "@mui/material";
import { Box } from "@mui/system";

function Agios() {
  // Écrivez un algorithme qui calcule les agios avec un taux de 10% pour un découvert utilisé durant X jours.

  // Par exemple, j'ai utilisé 500 euros de mon découvert autorisé durant 15 jours, j'aurai une pénalité à payer à la banque de 2.05 € qui correspond à l'opération suivante : `(500 * 15 *(10/100)) / 365` <=> `500 * 15 * 0.1 / 365`.

  // En entrée, votre algorithme prend :

  // 1. Le montant du découvert ;
  // 2. Durée d'utilisation du découvert (en jour).

  // En sortie, votre algorithme affiche la somme que le client devra payer à la banque **arrondie à 2 chiffres après la virgule.**

  // Votre algorithme s'arrête immédiatement lorsque le client n'a pas droit au découvert (montant du découvert égale à zéro), affichez le message "Découvert non autorisé => pas d'agios".
  // Forcez le client à saisir les bonnes valeurs :
  // - Montant du découvert compris entre 100 € et 2000 € ou égale à zéro lorsqu'il n'a pas droit au découvert ;
  // - Le nombre de jours compris entre 1 et 365.

  // #### Formulaire pour calculer d'agios

  // `Agios = (montant utilisé du découvert * nombre de jours d'utilisation * taux de la banque) / 365`
  // `Le taux de banque = 10 / 100 = 0.1`

  const handleAgios = () => {
    const montant = prompt("Entrez le montant du découvert");
    const jours = prompt("Entrez le nombre de jours d'utilisation");
    const taux = 0.1;

    if (montant === 0) {
      alert("Découvert non autorisé => pas d'agios");
    } else {
      const agios = (montant * jours * taux) / 365;
      alert(`Vous devez payer ${agios.toFixed(2)} € à la banque`);
    }
  };

  return (
    <div>
      <h1>Agios</h1>
      <Button variant="contained" color="primary" onClick={handleAgios}>
        Calculer les agios
      </Button>
    </div>
  );
}

export default Agios;
