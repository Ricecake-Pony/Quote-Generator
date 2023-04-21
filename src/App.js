import React, {useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [advice, setAdvice] = useState([])

  function fetchQuote() {
    axios.get('https://api.adviceslip.com/advice')
    .then(r => 
    {
      const {advice} = r.data.slip
      console.log(advice)
      setAdvice(advice) // setting the advice state to a string instead of an object to get rid of an error with onClick
    })
    .catch ((error) => {
      console.log(error);
    })
  }


  return (
    <div className="app">
      <div className='card'>
        <h1 className="header"> {advice}</h1>
          <button onClick={fetchQuote} className='button'> Click For New Quote! </button>
      </div>
    </div>
  );
}

export default App;
