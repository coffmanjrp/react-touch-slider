import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="slide">
        <h2>Airpods</h2>
        <h4>$199</h4>
        <img src={image1} alt="Airpods" />
        <a href="#!" className="btn">
          Buy Now
        </a>
      </div>
      <div className="slide">
        <h2>iPhone 12</h2>
        <h4>$799</h4>
        <img src={image2} alt="iPhone 12" />
        <a href="#!" className="btn">
          Buy Now
        </a>
      </div>
      <div className="slide">
        <h2>iPad</h2>
        <h4>$599</h4>
        <img src={image3} alt="iPad" />
        <a href="#!" className="btn">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default App;
