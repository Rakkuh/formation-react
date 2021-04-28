import * as React from 'react';
import './App.css'
import Button from './components/Button/Button';
import MemeForm from './components/MemeForm/MemeForm'

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state={compteur:-1, lastClickedTime:null}
  }

  componentDidMount() {
    this.setState({compteur:0});
  }

  render() {
     return <div className="App">
        <div>Les boutons ont ete cliques : {this.state.compteur} fois<br/>
        {this.state.lastClickedTime && 'Dernier clic' +this.state.lastClickedTime?.toISOString()}</div>
       
       <MemeForm />
       
        <Button label="OK" couleurDeFond="green" onClick={() => {
          this.setState({compteur:this.state.compteur+1, lastClickedTime:new Date()});
        }}/>
        <Button label="CANCEL" couleurDeFond="grey" onClick={() => {

        }}/>
      </div>
  }

}

export default App;