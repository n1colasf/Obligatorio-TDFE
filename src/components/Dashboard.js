import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { guardarTrans } from '../features/loginSlice'
import { guardarMonedas } from '../features/monedasSlice'

// COMPONENTES
import imgLogo from '../img/solologo.png'

import CrearTransaccion from './Dashboard/CrearTransaccion'
import MontoInvertido from './Dashboard/MontoInvertido'
import ListarTransacciones from './Dashboard/ListarTransacciones'
import SugerenciaIA from './Dashboard/SugerenciaIA'
import GraficoComprados from './Dashboard/GraficoComprados'
import GraficoVendidos from './Dashboard/GraficoVendidos'
import GraficoMonedas from './Dashboard/GraficoMonedas'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const usuario = useSelector((state) => state.usuarioLogin.usuario)
  const apiKey = useSelector((state) => state.usuarioLogin.apikey)
  const idUsuario = useSelector((state) => state.usuarioLogin.id)

  useEffect(() => {
    if (apiKey === '') {
      navigate('/')
    } else {
      const urlMoneda = 'https://crypto.develotion.com/monedas.php'
      const urlTrans = `https://crypto.develotion.com/transacciones.php?idUsuario=${idUsuario}`

      fetch(urlMoneda, {
        headers: {
          'Content-Type': 'application/json',
          apikey: apiKey
        }
      })
        .then((respuesta) => respuesta.json())
        .then((data) => {
          dispatch(guardarMonedas(data.monedas))
        })
      fetch(urlTrans, {
        headers: {
          apikey: apiKey,
          'Content-Type': 'application/json'
        }
      })
        .then((respuesta) => respuesta.json())
        .then((data) => {
          dispatch(guardarTrans(data.transacciones))
        })
    }
  }, [])

  const irAlogin = () => {
    // solo redirige al login, no borra el store acrtual, hay que refrescar la pagina para borrarlo
    navigate('/')
  }

  return (
    <>
      <div className='container'>
        <br />
        <div className='d-grid gap-2 d-md-flex justify-content-end'>
          <button className='btn btn-light mediano' disabled>
            <img className='img-fluid' id='chico' src={imgLogo} alt='' /> ¡hola{' '}
            {usuario}!
          </button>
        </div>
        <div className='card shadow'>
          <br />
          <CrearTransaccion />
        </div>
        <div className='card shadow'>
          <br />
          <ListarTransacciones />
        </div>
        <div className='card shadow'>
          <br />
          <MontoInvertido />
        </div>
        <div className='card shadow'>
          <br />
          <SugerenciaIA />
        </div>
        <div className='card shadow'>
          <br />
          <GraficoComprados />
        </div>
        <div className='card shadow'>
          <br />
          <GraficoVendidos />
        </div>
        <div className='card shadow'>
          <br />
          <GraficoMonedas />
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col text-center'>
            <button className='btn btn-danger' onClick={irAlogin}>
              cerrar sesión
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  )
}

export default Dashboard
