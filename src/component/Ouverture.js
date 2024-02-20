import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, setPassword, setEmail } from "../reducer/user";
import { TextField, Button, Switch } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Ouverture.css";

function Ouverture() {
	const [isOverdraftContainerVisible, setOverdraftContainerVisible] = useState(false);

	const handleKeyDown = (e) => {
		if (e.key == "y") {
		  console.log('coucou');
		  setOverdraftContainerVisible(true);
		}
	 };
  
	useEffect(() => {
		document.body.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

  return (
		<main>
			<div className="container">
				<p id="title">Bienvenue chez GTM Bank</p>
				<p>Voulez-vous avoir un découvert ?</p>
				<p>Si oui, appuyez sur la touche <span id="y">Y</span>, sinon appuyez sur une autre touche</p>
				<p className="choice">Découvert : <span id="choice"></span></p>

				{isOverdraftContainerVisible && 
					<div className="overdraft-container">
						<label htmlFor="overdraft">Saisissez le montant du découvert entre 100€ et 2000€</label>
						<input type="number" name="overdraft" id="overdraft" min="100" max="2000" placeholder="100" required />
						<p id="overdraft-alert">Veuillez saisir un montant compris entre 100€ et 2000€</p>
					</div>
				}

				<div className="amount-container">
					<label htmlFor="amount">Saisissez le montant de dépôt (minimum 500€)</label>
					<input type="number" name="amount" id="amount" min="500" placeholder="500" required />
					<p id="amount-alert">Veuillez saisir un montant minimum de 500 €</p>
				</div>

				<div className="recap-container">
					<p>Montant du découvert autorisé : <span id="allowed-overdraft"></span>€</p>
					<p>Montant à transférer : <span id="transfer"></span>€</p>
				</div>
			</div>
		</main>
  );
}

export default Ouverture;
