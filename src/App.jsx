import './App.css'
import Header from './component/Header'
import { addToCart, removeFromCart, emptyCart } from './redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { productListing } from './redux/productAction'
// use dispatch to dispatch action to reducer to update state


function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.productList)
  console.log(data)

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
        <button onClick={() => dispatch(productListing(product))} className='btn'>Show Products </button>
        {/* dispatch takes a parameter which is the action */}
      </div>
    </>
  )
}

export default App
