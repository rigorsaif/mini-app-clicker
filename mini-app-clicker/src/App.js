import React, { Component } from 'react';
import Header from './components/Header';
import Clicker from './components/Clicker';
import CopperCount from './components/CopperCount';

class App extends Component {
  state = {
    inventory: 0
  }
  render() {
    return (
      <div>
      <Header />
      <CopperCount inventory={this.state.inventory} />
      <Clicker onClick={this.incremenetInventory} />
      </div>
    );
  }
  incremenetInventory = () => {
    this.setState({
      inventory: this.state.inventory + 1
    })
  }
}

export default App;
