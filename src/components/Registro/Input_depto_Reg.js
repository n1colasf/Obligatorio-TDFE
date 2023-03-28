import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarDepto } from '../../features/registroSlice'

const InputDeptoReg = () => {
  const departamentos = useSelector(
    (state) => state.departamentos.departamentos
  )

  const input_usuario = useRef(null)
  const dispatch = useDispatch()

  function capturarValor () {
    const valor = input_usuario.current.value
    dispatch(guardarDepto(valor))
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <label id='inicio'>
          departamento:
          <select
            className='form-select'
            id='inp_reg_depto'
            defaultValue='default'
            ref={input_usuario}
            onChange={capturarValor}
          >
            <option value='default'>seleccione departamento</option>
            {departamentos.map((dep) => (
              <option key={dep.id} value={dep.id}>
                {dep.nombre}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}

export default InputDeptoReg
