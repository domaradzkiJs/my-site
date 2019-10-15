import React from 'react';
import './App.css';

import Header from './components/header.component';
import Main from './components/main.component';
import Footer from './components/footer.component';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      isToggleOn:true
     
        
      }
      };
  

  handleSwapLang = () => {
    this.setState(state=>({
      isToggleOn: !state.isToggleOn
    }));
  }


  render() {

    return (
      <div className="App">
      <Header swapLang={this.handleSwapLang} tgl={this.state.isToggleOn} />
      <Main  tgl={this.state.isToggleOn} />
      <Footer tgl={this.state.isToggleOn} />
    </div>

    )
  }


}



export default App;
