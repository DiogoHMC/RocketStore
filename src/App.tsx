import './App.css'
import { AppRoutes } from './Routes'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}

export default App
