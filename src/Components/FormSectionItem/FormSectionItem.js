import React, { Component } from 'react';
import slugify from 'slugify';
import './FormSectionItem.css';
import USCurrencyFormat from '../../currencyFormat';

class FormSectionItem extends Component {
	static defaultProps = {
		selected: false,
		option: {},
		featureName: ''
	}

	render() {
		const {id, featureName, selected, option, updateFeature } = this.props;
		return (
			<div className='feature__item'>
				<input
				checked={selected}
				type="radio"
				id={id}
				className="feature__option"
				name={slugify(featureName)}
				onChange={e => updateFeature(featureName, option)}
				/>
				<label htmlFor={id} className="feature__label">
				{option.name} ({USCurrencyFormat.format(option.cost)})
				</label>
		</div>
	);
	}
}

export default FormSectionItem;
