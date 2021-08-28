import products from './utils/data';
import './App.scss';

function App() {
  return (
    <div className="App">
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id} className="slide">
            <h2>{product.name}</h2>
            <h4>${product.price}</h4>
            <img src={product.image} alt={product.alt} />
            <a href={product.link} className="btn">
              Buy Now
            </a>
          </div>
        ))}
    </div>
  );
}

export default App;
