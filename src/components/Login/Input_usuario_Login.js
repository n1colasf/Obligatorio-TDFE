import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { guardarUsuario } from '../../features/loginSlice'

const InputUsuarioLogin = () => {
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
            ref={input_usuario}
            id='inp_usuario'
            className='form-control'
            onKeyUp={capturarValor}
            placeholder='Linkedin'
          />
        </label>
      </div>
    </div>
  )
}

export default InputUsuarioLogin
