import React, { useState } from 'react';
import styles from './MemeForm.module.css';
import Button from '../Button/Button'
import PropTypes from 'prop-types';


export const intialState = { name: '', text: { x: 0, y: 0, value: '', bold: false, underlined: false, color: '#000000' }, image: '' };

const MemeForm = (props) => {

  const [state, setState] = useState(intialState);

  return (<form className={styles.MemeForm} data-testid="MemeForm" >
    <h1>Meme Editor</h1>
    <label htmlFor="name-input">Nom du meme</label><br />
    <input types="text" id="name-input" placeholder="Sasir nom" onChange={(event) => {
      setState({ ...state, name: event.target.value })
    }} /><br />
    <label htmlFor="image-select">Image du meme</label><br />
    <select id="image-select" value={state.image} onChange={(event) => {
      setState({ ...state, image: event.target.value })
    }}>
      <option value="img/empty.jpg">Empty</option>
      <option value="img/5element.jpg">5eme Element</option>
    </select>
    <div>
      <label htmlFor="text-input">Texte</label><br />
      <input type="text" id="text-input" onChange={(event) => {
        setState({ ...state, text: { ...state.text, value: event.target.value } })
      }} />
      <div className={styles.inlineContainer}>
        <label><input type="number" onChange={(event) => {
          setState({ ...state, text: { ...state.text, x: Number.parseInt(event.target.value) } })
        }} /> : X</label>
         /
        <label>Y : <input type="number" onChange={(event) => {
          setState({ ...state, text: { ...state.text, y: Number.parseInt(event.target.value) } })
        }} /></label>
      </div>
      <label>Couleur de texte</label>
      <input type="color" onChange={(event) => {
        setState({ ...state, text: { ...state.text, color: event.target.value } })
      }} /> <br />
      <div className={styles.inlineContainer}>
        <label><input type="checkbox" onChange={(event) => {
          setState({ ...state, text: { ...state.text, underlined: event.target.checked } })
        }} /> : underlined</label>
        /
        <label>bold : <input type="checkbox" onChange={(event) => {
          setState({ ...state, text: { ...state.text, bold: event.target.checked } })
        }} /></label>
      </div>
    </div>

    <Button couleurDeFond="green" label="Save" onClick={() => { props.onSubmit(state) }} />
    <Button couleurDeFond="grey" label="Cancel" onClick={() => { setState(intialState) }} />
  
    <div>Voici le contenu de la saisie : {JSON.stringify(state)}</div>
  </form>);
}

MemeForm.propTypes = { onSubmit: PropTypes.func.isRequired };

MemeForm.defaultProps = {};

export default MemeForm;
