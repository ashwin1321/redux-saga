import './App.css'
import { addToCart } from './redux/action'
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
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      {/* dispatch takes a parameter which is the action */}
    </>
  )
}

export default App
