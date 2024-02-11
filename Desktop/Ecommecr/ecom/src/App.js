import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image"/ >
              <div className="product-info">
                <h5>{product.title}</h5>
                <p>${product.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
