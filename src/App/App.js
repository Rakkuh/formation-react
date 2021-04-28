import * as React from 'react';
import './App.css'
import MemeForm, {intialState as CurrentMemeInitialState} from './components/MemeForm/MemeForm'

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state={currentMeme:CurrentMemeInitialState}
  }

  render() {
     return <div className="App">
      
       <MemeForm onSubmit={(valeurDuMeme) => {
         this.setState({currentMeme:valeurDuMeme});
       }}/>
      <div>Voici le contenu du parent : {JSON.stringify(this.state)}</div>
      </div>
  }

}

export default App;