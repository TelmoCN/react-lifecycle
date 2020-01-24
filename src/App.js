import React from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mount: true
    }

    this.mountCounter = () => {
      this.setState({
        mount: true
      });
    };

    this.unMountCounter = () => {
      this.setState({
        mount: false
      });
    };
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.mountCounter}>Mount Counter</button>
      <button onClick={this.unMountCounter}>UnMount Counter</button>
        <Counter />
      </div>
    );
  }
};

export default App;
