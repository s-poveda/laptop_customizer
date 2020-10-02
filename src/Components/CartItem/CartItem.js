import React from 'react';
import USCurrencyFormat from	'../../currencyFormat';

const CartItem = (props) => {
	const { featureName, selectedOption } = props;
	return (
		<div className="summary__option">
			<div className="summary__option__label">{featureName} </div>
			<div className="summary__option__value">{selectedOption.name}</div>
			<div className="summary__option__cost">
				{USCurrencyFormat.format(selectedOption.cost)}
			</div>
		</div>
	)
}

export default CartItem;
