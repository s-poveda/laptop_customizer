import React, { Component } from 'react';
import FormSection from '../FormSection/FormSection';

class CustomizeForm extends Component {
	getFormSectionsRender = () => {
			return Object.keys(this.props.features).map((feature, idx) => {
				const featureHash = feature + '-' + idx;
				return <FormSection key={featureHash}
				className='feature'
				header={feature}
				features={this.props.features}
				featureOptions={this.props.features[feature]}
				selectedFeature={this.props.selected[feature]}
				/>
			});
		}

	render () {
		const features = this.getFormSectionsRender();
		return (
			<form className="main__form">
				<h2>{this.props.title? this.props.title : ''}</h2>
				{features}
			</form>
		)
	}

}

export default CustomizeForm;
