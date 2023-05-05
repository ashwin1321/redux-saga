import "./App.css";
import { useEffect } from "react";
import Header from "./component/Header";
import { addToCart, removeFromCart, emptyCart } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productListing } from "./redux/productAction";
// use dispatch to dispatch action to reducer to update state

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productList);
  console.log(`data from saga`, data);

  useEffect(() => {
    dispatch(productListing());       // calling the action on load
  }, [dispatch]);


  return (
    <>
      <Header />
      <div className="buttons">
        <button onClick={() => dispatch(emptyCart())} className="btn">
          Empty Cart
        </button>
        {/* <button
          onClick={() => dispatch(productListing())}
          className="btn"
        >
          Show Products{" "}
        </button> */}
        {/* dispatch takes a parameter which is the action */}
      </div >

      <div className="product-container" >
        {
          data.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div key={item.id} className="product">
              <img src={item.photo} alt={item.name} />
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>price: {item.price}</div>
              <div>brand: {item.brand}</div>
              <div>category: {item.Category}</div>
              <div className="buttons">
                {/* <button className="btn">Add To Cart</button>
                <button className="btn">Remove</button> */}
                <button onClick={() => dispatch(addToCart(item))} className="btn">
                  Add To Cart
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.name))}
                  className="btn"
                >
                  Remove{" "}
                </button>
              </div>

            </div>
          ))
        }
      </div >
    </>
  );
}

export default App;
