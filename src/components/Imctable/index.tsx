import './Imctable.css'

const Imctable = (props:any) => {

    const getUserImc = (imcValue:string) => {
        
        if(parseFloat(imcValue) < 18.5) {
            return <span className="weight-warn">Abaixo do peso</span>
        } else if (parseFloat(imcValue) >= 18.5 && parseFloat(imcValue) < 24.9) {
            return <span className="weight-normal">Peso normal</span>
        } else if (parseFloat(imcValue) >= 24.9 && parseFloat(imcValue) < 29.9) {
            return <span className="weight-warn">Sobrepeso</span>
        } else if (parseFloat(imcValue) >= 29.9 && parseFloat(imcValue) < 34.9) {
            return <span className="weight-warn">Obesidade grau 1</span>
        } else if (parseFloat(imcValue) >= 34.9 && parseFloat(imcValue) < 39.9) {
            return <span className="weight-danger">Obesidade grau 2</span>
        } else if (parseFloat(imcValue) > 39.9){
            return <span className="weight-danger">Obesidade grau 3</span>
        } else {
            return <span className="weight-danger">Obesidade grau peligro</span>
        }
    }
    return (
        <>
            <p>{getUserImc(props.imcValue)}</p>
        </>
    )
}

export default Imctable;