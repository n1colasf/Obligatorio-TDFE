import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { guardarPass } from '../../features/loginSlice'

const InputPassLogin = () => {
  const input_usuario = useRef(null)
  const dispatch = useDispatch()

  function capturarValor () {
    const valor = input_usuario.current.value
    dispatch(guardarPass(valor))
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
