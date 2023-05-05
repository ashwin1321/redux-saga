import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import { addToCart, removeFromCart, emptyCart } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productListing, addProduct } from "./redux/productAction";
// use dispatch to dispatch action to reducer to update state

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productList);
  console.log(`data from saga`, data);

  const [productData, setProductData] = useState({
    name: '',
    color: '',
    price: 0,
    brand: '',
    Category: '',
    photo: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(productData));
    setProductData({
      name: '',
      color: '',
      price: 0,
      brand: '',
      Category: '',
      photo: ''
    });
  };

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
          data.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={item.id + index} className="product">
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

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={productData.name} onChange={(event) => setProductData({ ...productData, name: event.target.value })} />
          </label>
          <label>
            Color:
            <input type="text" value={productData.color} onChange={(event) => setProductData({ ...productData, color: event.target.value })} />
          </label>
          <label>
            Price:
            <input type="number" value={productData.price} onChange={(event) => setProductData({ ...productData, price: event.target.value })} />
          </label>
          <label>
            Brand:
            <input type="text" value={productData.brand} onChange={(event) => setProductData({ ...productData, brand: event.target.value })} />
          </label>
          <label>
            Category:
            <input type="text" value={productData.Category} onChange={(event) => setProductData({ ...productData, Category: event.target.value })} />
          </label>
          <label>
            Photo:
            <input type="text" value={productData.photo} onChange={(event) => setProductData({ ...productData, photo: event.target.value })} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
