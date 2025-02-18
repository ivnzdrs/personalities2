import { useState } from 'react';
import { sculptureList } from './Data';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handlePrevClick() {
    setIndex(hasPrev ? index - 1 : sculptureList.length - 1);
  }

  const sculpture = sculptureList[index];

  return (
    <div className="wrapper">
      <div className="name-header">Ivan Andres C-PEITEL3</div>
      <div className="container">
        <div className="gallery-container">
          <div className="card">
            <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p className="card-description">{sculpture.description}</p>
          </div>
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrevClick} disabled={!hasPrev}>Back</button>
          <button onClick={handleNextClick} disabled={!hasNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
