import React, { Component } from 'react';
import slugify from 'slugify';
import USCurrencyFormat from '../../currencyFormat';

class FormSectionItem extends Component {
	static defaultProps = {
		selected: false,
		option: {},
		featureName: ''
	}

// TODO: wire onclick callback(s)

	render() {
		const {id, featureName, selected, option } = this.props;
		return (
			<div>
				<input
				checked={selected}
				type="radio"
				id={id}
				className="feature__option"
				name={slugify(featureName)}
				onChange={e => this.props.updateFeature(featureName, option)}
				/>
				<label htmlFor={id} className="feature__label">
				{option.name} ({USCurrencyFormat.format(option.cost)})
				</label>
		</div>
	);
	}
}

export default FormSectionItem;
