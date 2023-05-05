import './App.css'
import Header from './component/Header'
import { addToCart, removeFromCart, emptyCart } from './redux/action'
import { useDispatch } from 'react-redux'
// use dispatch to dispatch action to reducer to update state

function App() {
  const dispatch = useDispatch()
  const product = {
    name: 'Iphone',
    price: 1000,
    type: 'Electronics',
  }

  return (
    <>
      <Header />
      <div className='buttons'>
        <button onClick={() => dispatch(addToCart(product))} className='btn'>Add To Cart</button>
        <button onClick={() => dispatch(removeFromCart(product.name))} className='btn'>Remove </button>
        <button onClick={() => dispatch(emptyCart(product))} className='btn'>Empty </button>
        {/* dispatch takes a parameter which is the action */}
      </div>
    </>
  )
}

export default App
