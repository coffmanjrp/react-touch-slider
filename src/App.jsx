import { useEffect, useState } from 'react';
import products from './utils/data';
import './App.scss';

function App() {
  const [isDraggable, setIsDraggable] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.oncontextmenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
  }, []);

  const getPositionX = (e) => {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  };

  const setPositionByIndex = () => {
    setCurrentTranslate(currentIndex * -window.innerWidth);
    setPrevTranslate(currentTranslate);
  };

  const handleStart = (index, e) => {
    setIsDraggable(true);
    setIsGrabbing(true);

    setCurrentIndex(index);
    setStartPosition(getPositionX(e));
  };

  const handleEnd = () => {
    setIsDraggable(false);
    setIsGrabbing(false);

    const moveBy = currentTranslate - prevTranslate;

    if (moveBy < -100 && currentIndex < products.length - 1) {
      setCurrentIndex((index) => index + 1);
    }

    if (moveBy > 100 && currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
    }

    setPositionByIndex();
  };

  const handleMove = (e) => {
    if (isDraggable) {
      const currentPosition = getPositionX(e);
      setCurrentTranslate(prevTranslate + currentPosition - startPosition);
    }
  };

  return (
    <div
      className={`App${isGrabbing ? ' grabbing' : ''}`}
      style={{
        transform: `translateX(${currentTranslate}px)`,
      }}
    >
      {products.length > 0 &&
        products.map((product, index) => (
          <div
            key={product.id}
            className="slide"
            onTouchStart={(e) => handleStart(index, e)}
            onTouchEnd={(e) => handleEnd(e)}
            onTouchMove={handleMove}
            onMouseDown={(e) => handleStart(index, e)}
            onMouseUp={handleEnd}
            onMouseLeave={(e) => handleEnd(e)}
            onMouseMove={handleMove}
          >
            <h2>{product.name}</h2>
            <h4>${product.price}</h4>
            <img
              src={product.image}
              alt={product.alt}
              onDragStart={(e) => e.preventDefault()}
            />
            <a href={product.link} className="btn">
              Buy Now
            </a>
          </div>
        ))}
    </div>
  );
}

export default App;
