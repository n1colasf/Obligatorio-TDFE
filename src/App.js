import './App.css'
import Login from './components/Login'
import Registro from './components/Registro'
import Dashboard from './components/Dashboard'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { inject } from '@vercel/analytics'

inject()

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App
