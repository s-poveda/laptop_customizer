import React, { Component } from 'react';
import './CartSummary.css';
import CartTotal from '../CartTotal/CartTotal';
import CartItem from '../CartItem/CartItem';

class CartSummary extends Component {
	static defaultProps = {
		selected: {}
	}

	getTotal = () => {
		return Object.keys(this.props.selected).reduce(
			(acc, curr) => acc + this.props.selected[curr].cost,
			0
		);
	}

	generateCartItems = () => {
		return Object.keys(this.props.selected).map((feature, idx) => {
			const featureHash = feature + '-' + idx;
			const selectedOption = this.props.selected[feature];
			return <CartItem key={featureHash} selectedOption={selectedOption} featureName={feature}/>
		});
	}

	render () {
		return (
			<section className="main__summary">
			<h2>Your cart</h2>
			{this.generateCartItems()}
			<CartTotal total={this.getTotal()} />
			</section>
	)
	}
}

export default CartSummary;
