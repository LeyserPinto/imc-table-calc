import { useState } from 'react';

import './Form.css'
const Form = (props:any) => {
    const ebacLogo = 'https://lms.ebaconline.com.br/_nuxt/img/ebac-logo-white.617c9af.svg'
    const [heightValue, setHeightValue] = useState(0.00);
    const [weightValue, setWeightValue] = useState(0.00);
    const sendCalculateOperation = (e:React.FormEvent<HTMLButtonElement | MouseEvent>) => {
        e.preventDefault();
        let imcValue = weightValue / (heightValue * heightValue);
        props.setImcValue(imcValue.toFixed(2));
    }
    return (
        <>
        <form>
            <img src={ebacLogo} width={180}/>
            <label>
                <input type="number" placeholder="Height in cm" required onChange={e=>setHeightValue(parseFloat(e.target.value) / 100)}/>  
                <p>Set the value in centimeters: ex: 170cm</p>
            </label>
            <label>
                <input type="number" placeholder="Weight in kg" required onChange={e=>setWeightValue(parseFloat(e.target.value))}/>
                <p>Set the value in Kilograms, ex: 80.05kg</p>
            </label>
            <button type='submit' onClick={(e) => sendCalculateOperation(e)}>Calculate</button>
        </form>
        </>
    )
}

export default Form;