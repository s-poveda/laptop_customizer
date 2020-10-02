import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import './App.css';
import Header from './Components/Header/Header';
import CustomizeForm from './Components/CustomizeForm/Form'
import CartSummary from './Components/Cart/CartSummary';

class App extends Component {

	static defaultProps = {
		features: {}
	}

  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header title='ELF Computing | Laptops' />
        <main>
          <CustomizeForm title='Customize your laptop' features={this.props.features} selected={this.state.selected}/>
          <CartSummary selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;
