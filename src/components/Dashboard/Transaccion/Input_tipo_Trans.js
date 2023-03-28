import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { guardarTipo } from '../../../features/transaccionSlice'

const InputTipoTrans = () => {
  const input_usuario = useRef(null)
  const dispatch = useDispatch()

<<<<<<< HEAD
  function capturarValor() {
    const valorIdMoneda = input_usuario.current.value;
    dispatch(guardarTipo(valorIdMoneda));
  };
=======
  const capturarValor = () => {
    const valorIdMoneda = input_usuario.current.value
    dispatch(guardarTipo(valorIdMoneda))
  }
>>>>>>> 77d41e4a1a2a30c5c26851e0daf2ed4e822b75d9
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <label id='inicio'>
          tipo:
          <select
            className='form-select'
            id='inp_trasn_tipo'
            ref={input_usuario}
            defaultValue='default'
            onChange={capturarValor}
          >
            <option value='default' disabled>
              seleccione operación
            </option>
            ;<option value='1'>Comprar</option>
            <option value='2'>Vender</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default InputTipoTrans
