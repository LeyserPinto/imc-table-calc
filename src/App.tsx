import { useState } from 'react'
import Form from './components/Form'
import Imctable from './components/Imctable'

function App() {
  const [imcValue, setImcValue] = useState(0.00)
  return (
    <>
      <Form setImcValue={setImcValue} />
      {imcValue != 0.00 && (
        <Imctable imcValue={imcValue}/>
      )}
      <br/>
      <i>Copyright &copy; Leyser Pinto 2023</i>
    </>
  )
}

export default App
