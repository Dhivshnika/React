import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App({ url, className }) {
  const [innerElements, setInnerElements] = useState([]);

  useEffect(() => {
    const fetchInnerElements = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fetch-data', {
          params: {
            url: url
          }
        });
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, 'text/html');
        const elements = doc.getElementsByClassName(className);
        const elementsArray = Array.from(elements);
        setInnerElements(elementsArray);
      } catch (error) {
        console.error('Error fetching inner elements:', error);
      }
    };

    fetchInnerElements();
  }, [url, className]);

  return (
    <div>
      <h2>Inner Elements with Class "{className}"</h2>
      <ul>
        {innerElements.map((element, index) => (
          <li key={index}>{element.textContent}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
