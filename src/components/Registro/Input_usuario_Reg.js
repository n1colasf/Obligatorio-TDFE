import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { guardarUsuario } from '../../features/registroSlice'

const InputUsuarioReg = () => {
  const input_usuario = useRef(null)
  const dispatch = useDispatch()

<<<<<<< HEAD
  function capturarValor() {
    let valor = input_usuario.current.value;
    dispatch(guardarUsuario(valor));
=======
  const capturarValor = () => {
    const valor = input_usuario.current.value
    dispatch(guardarUsuario(valor))
>>>>>>> 77d41e4a1a2a30c5c26851e0daf2ed4e822b75d9
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <label id='inicio'>
          usuario:
          <input
            type='text'
            id='inp_reg_usuario'
            ref={input_usuario}
            className='form-control'
            onChange={capturarValor}
          />
        </label>
      </div>
    </div>
  )
}

export default InputUsuarioReg
