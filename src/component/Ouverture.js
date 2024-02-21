import { React, useState, useEffect } from "react";
import "./Ouverture.css";

function Ouverture() {
	const [isOverdraft, setIsOverdraft] = useState(false);
	const [isChoiceVisible, setChoiceVisible] = useState(false);
	const [choice, setChoice] = useState("");
	const [isOverdraftContainerVisible, setOverdraftContainerVisible] = useState(false);
	const [overdraftAlert, setOverdraftAlert] = useState(false);
	const [isAmountContainerVisible, setAmountContainerVisible] = useState(false);
	const [amountAlert, setAmountAlert] = useState(false);
	const [isRecapVisible, setRecapVisible] = useState(false);
	const [overdraftAmount, setOverdraftAmount] = useState("");
	const [transfer, setTransfer] = useState("");

	const handleInputOverdraft = (e) => {
		if (e.target.value < 100 || e.target.value > 2000) {
			setOverdraftAlert(true);
		} else {
			setOverdraftAlert(false);
			setOverdraftAmount(e.target.value);
		}
	}

	const handleInputAmount = (e) => {
		if (e.target.value < 500) {
			setAmountAlert(true);
		} else {
			setAmountAlert(false);
			setTransfer(e.target.value);
		}
	}

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key == "y" && !isOverdraft) {
				setIsOverdraft(true);
				setChoiceVisible(true);
				setChoice("Oui");
				setOverdraftContainerVisible(true);
				setAmountContainerVisible(true);
				setRecapVisible(true);
			} else if (e.key !== "y" && !isOverdraft) {
				setChoiceVisible(true);
				setChoice("Non");
				setAmountContainerVisible(true);
				setRecapVisible(true);
				setOverdraftAmount("0");
			}
		 };

		document.body.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOverdraft]);

  return (
		<main tabIndex={0}>
			<div className="container">
				<p id="title">Bienvenue chez GTM Bank</p>
				<p>Voulez-vous avoir un découvert ?</p>
				<p>Si oui, appuyez sur la touche <span id="y">Y</span>, sinon appuyez sur une autre touche</p>
				{isChoiceVisible &&
					<p className="choice">Découvert : <span id="choice">{choice}</span></p>
				}

				{isOverdraftContainerVisible && 
					<div className="overdraft-container">
						<label htmlFor="overdraft">Saisissez le montant du découvert entre 100€ et 2000€</label>
						<input type="number" name="overdraft" id="overdraft" min="100" max="2000" placeholder="100" required onChange={handleInputOverdraft} />
						<p id="overdraft-alert" style={{ display: overdraftAlert ? 'block' : 'none' }}>Veuillez saisir un montant compris entre 100€ et 2000€</p>
					</div>
				}

				{isAmountContainerVisible && 
					<div className="amount-container">
						<label htmlFor="amount">Saisissez le montant de dépôt (minimum 500€)</label>
						<input type="number" name="amount" id="amount" min="500" placeholder="500" required onChange={handleInputAmount} />
						<p id="amount-alert" style={{ display: amountAlert ? 'block' : 'none' }}>Veuillez saisir un montant minimum de 500 €</p>
					</div>
				}

				{isRecapVisible &&
					<div className="recap-container">
						<p>Montant du découvert autorisé : <span id="allowed-overdraft">{overdraftAmount}</span>€</p>
						<p>Montant à transférer : <span id="transfer">{transfer}</span>€</p>
					</div>
				}
			</div>
		</main>
  );
}

export default Ouverture;
