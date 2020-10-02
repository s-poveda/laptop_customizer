import React, { Component} from 'react';
import slugify from 'slugify';
import USCurrencyFormat from '../../currencyFormat';


class CustomizeForm extends Component {
	static defaultProps = {
		features: {}
	}
	state = {
		selected: this.props.selected,
		features : this.props.features
	}

	getFeatures = () => {
			return Object.keys(this.state.features).map((feature, idx) => {
				const featureHash = feature + '-' + idx;
				const options = this.state.features[feature].map(item => {
					const itemHash = slugify(JSON.stringify(item));
					return (
						<div key={itemHash} className="feature__item">
						<input
							type="radio"
							id={itemHash}
							className="feature__option"
							name={slugify(feature)}
							checked={item.name === this.state.selected[feature].name}
							onChange={e => this.updateFeature(feature, item)}
							/>
							<label htmlFor={itemHash} className="feature__label">
							{item.name} ({USCurrencyFormat.format(item.cost)})
							</label>
							</div>
						);
					});

					return (
						<fieldset className="feature" key={featureHash}>
						<legend className="feature__name">
						<h3>{feature}</h3>
						</legend>
						{options}
						</fieldset>
					);
				});
			}

	render () {
		const features = this.getFeatures();
		return (
			<div>
			{features}
			</div>
		)
	}

}

export default CustomizeForm;
