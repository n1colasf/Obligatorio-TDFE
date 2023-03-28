import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { guardarPass } from '../../features/loginSlice'

const InputPassLogin = () => {
  const input_usuario = useRef(null)
  const dispatch = useDispatch()

<<<<<<< HEAD
  function capturarValor() {
    let valor = input_usuario.current.value;
    dispatch(guardarPass(valor));
=======
  const capturarValor = () => {
    const valor = input_usuario.current.value
    dispatch(guardarPass(valor))
>>>>>>> 77d41e4a1a2a30c5c26851e0daf2ed4e822b75d9
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <label id='inicio'>
          contraseña:
          <input
            type='password'
            ref={input_usuario}
            id='inp_password'
            className='form-control'
            onKeyUp={capturarValor}
            placeholder='1234'
          />
        </label>
      </div>
    </div>
  )
}

export default InputPassLogin
