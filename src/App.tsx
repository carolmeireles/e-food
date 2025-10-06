import { BrowserRouter } from "react-router-dom"

import Rotas from './routes'
import { CssGlobal } from "./styles"
import Footer from './components/Footer'
import { Provider } from "react-redux"
import { store } from "./store"
import Cart from "./components/Cart"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssGlobal />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
