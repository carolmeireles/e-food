import { BrowserRouter } from "react-router-dom"

import Rotas from './routes'
import { CssGlobal } from "./styles"
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <CssGlobal />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
