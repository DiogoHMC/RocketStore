import './App.css'
import { AppRoutes } from './Routes'
import { CartProvider } from './contexts/CartContext'
import { ProductProvider } from './contexts/ProductContext'

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </ProductProvider>
  )
}

export default App
