import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarMoneda } from '../../../features/transaccionSlice'

const InputMonedaTrans = () => {
  const monedas = useSelector((state) => state.monedas.monedas)

  const input_usuario = useRef(null)
  const dispatch = useDispatch()

  const capturarValor = () => {
    const valorIdMoneda = input_usuario.current.value
    dispatch(guardarMoneda(valorIdMoneda))

    const valor_moneda = document.getElementById('inp_trans_valor')
    {
      monedas.forEach((moneda) => {
        if (moneda.id == valorIdMoneda) {
          valor_moneda.innerHTML = 'Valor: $' + ' ' + moneda.cotizacion
        }
      })
    }
  }
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <label id='inicio'>
          moneda:
          <select
            className='form-select'
            id='inp_trans_moneda'
            ref={input_usuario}
            defaultValue='default'
            onChange={capturarValor}
          >
            <option value='default' disabled>
              seleccione moneda
            </option>
            {monedas.map((moneda) => (
              <option key={moneda.id} value={moneda.id}>
                {moneda.nombre}
              </option>
            ))}
          </select>
        </label>
        <div className='row'>
          <label className='text-muted' id='inp_trans_valor'>
            Valor:
          </label>
        </div>
      </div>
    </div>
  )
}

export default InputMonedaTrans
