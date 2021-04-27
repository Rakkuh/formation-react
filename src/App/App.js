import './App.css';
import Button from './components/Button/Button.js'

function App() {
  return (
    <div className="App">
      <Button label="Ok" onClick={(event)=>{
        console.log("Je passe ici");
        }} style={{textDecoration: 'underline'}}/>
      <Button couleurDeFond="grey" taillePolice={10} label="Cancel" onClick={(event)=>{
        console.log("Je passe la");
        }}/>
    </div>
  );
}

export default App;
