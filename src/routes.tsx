import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import Checkout from './pages/Checkout'

const Rotas = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurante/:id' element={<Restaurante />} />
        <Route path='/checkout' element={<Checkout />} />
    </Routes>
)

export default Rotas