import { React, useState, useEffect } from "react";
import "./Ouverture.css";
import usestate from "usestate";

function Ouverture() {
	const [isChoiceVisible, setChoiceVisible] = useState(false);
	const [isOverdraftContainerVisible, setOverdraftContainerVisible] = useState(false);
	const [isAmountContainerVisible, setAmountContainerVisible] = useState(false);
	const [isRecapVisible, setRecapVisible] = useState(false);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key == "y") {
				setChoiceVisible(true);
				setOverdraftContainerVisible(true);
				setAmountContainerVisible(true);
				setRecapVisible(true);
			} else {
				console.log("test");
			}
		 };

		document.body.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

  return (
		<main tabIndex={0}>
			<div className="container">
				<p id="title">Bienvenue chez GTM Bank</p>
				<p>Voulez-vous avoir un découvert ?</p>
				<p>Si oui, appuyez sur la touche <span id="y">Y</span>, sinon appuyez sur une autre touche</p>
				{isChoiceVisible &&
					<p className="choice">Découvert : <span id="choice"></span></p>
				}

				{isOverdraftContainerVisible && 
					<div className="overdraft-container">
						<label htmlFor="overdraft">Saisissez le montant du découvert entre 100€ et 2000€</label>
						<input type="number" name="overdraft" id="overdraft" min="100" max="2000" placeholder="100" required />
						<p id="overdraft-alert">Veuillez saisir un montant compris entre 100€ et 2000€</p>
					</div>
				}

				{isAmountContainerVisible && 
					<div className="amount-container">
						<label htmlFor="amount">Saisissez le montant de dépôt (minimum 500€)</label>
						<input type="number" name="amount" id="amount" min="500" placeholder="500" required />
						<p id="amount-alert">Veuillez saisir un montant minimum de 500 €</p>
					</div>
				}

				{isRecapVisible &&
					<div className="recap-container">
						<p>Montant du découvert autorisé : <span id="allowed-overdraft"></span>€</p>
						<p>Montant à transférer : <span id="transfer"></span>€</p>
					</div>
				}
			</div>
		</main>
  );
}

export default Ouverture;
