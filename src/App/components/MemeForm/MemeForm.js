import React, {useState} from 'react';
import styles from './MemeForm.module.css';

const MemeForm = () => {

  const [formContent, setFormContent] = useState({
    name:'Default',
    count:0,
    color:'#111111'
  });

 return (<form className={styles.MemeForm} data-testid="MemeForm" >
    <input type="text" placeholder="Nom" value={formContent.name} onChange={(event) => {
      setFormContent({...formContent, name:event.target.value})
    }}/> <br/>
    <input type="number" placeholder="Nb Participants" onChange={(event) => {
      setFormContent({...formContent, count:Number.parseInt(event.target.value)})
    }}/> <br/>
    <input type="color" value={formContent.color} onChange={(event) => {
      setFormContent({...formContent, color:event.target.value})
    }}/> <br/>
    <input type="submit" value="Soumettre" /> <br/>
    <div style={{color: formContent.color}}>Voici le contenu de la saisie : {JSON.stringify(formContent)}</div>
  </form>);
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
