import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { guardarUsuario } from '../../features/registroSlice'

const InputUsuarioReg = () => {
  const input_usuario = useRef(null)
  const dispatch = useDispatch()

  function capturarValor () {
    const valor = input_usuario.current.value
    dispatch(guardarUsuario(valor))
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
