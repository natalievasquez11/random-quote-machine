import './App.css';
import { React, useState, useEffect } from 'react';

{/* */}
function App(props) {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentColor, setCurrentColor] = useState('#191970');
  document.body.style.backgroundColor = currentColor;
  
  useEffect(() => {
     fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomQuote = Math.floor(Math.random() * data.length);
        setQuotes(data);
        setCurrentQuote(data[randomQuote]);
      });
  },[]);
  
  let handleNewQuote = () => {
    const colors = ['#6A5ACD', '#6495ED', '#800080', '#4B0082', '#48D1CC', 
                  '#EE82EE', '#1E90FF', '#FF69B4', '#FFB6C1', '#66CDAA'];
    let randomQuote = Math.floor(Math.random() * quotes.length);
    let randomColor = Math.floor(Math.random() * colors.length);
    setCurrentQuote(quotes[randomQuote]);
    setCurrentColor(colors[randomColor]);
  }
  
  return(
    <div style={{color: currentColor}} id="quote-box" className='quoteboxDiv'>
      <div className='quoteDiv'>
        {(quotes.length === 0) ? 
          <h1 id="text"></h1> :
          <h2 id="text"><i className="fas fa-quote-left"></i> {currentQuote.text}</h2>}

       {(currentQuote.author === null) ?  
          <p id="author">- Unknown </p> : 
          <p id="author">- {currentQuote.author} </p>}
      </div>
      
      <div className='btnDiv'>
        <span>
          <button id="fb-quote" 
            style={{ backgroundColor: currentColor, borderColor: currentColor }}>
            <i className="fab fa-facebook-f btn"></i></button>
          <button style={{ backgroundColor: currentColor, borderColor: currentColor }}
            onClick={() => {
              window.open('https://twitter.com/')}}>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet"/>
            <i className="fab fa-twitter btn"></i>
           </button>
        </span>
        <span>
          <button id="new-quote" style={{backgroundColor: currentColor, borderColor: currentColor}}
            onClick={handleNewQuote}>
              New Quote
          </button>
        </span>
      </div>
    </div>
  )
}

export default App;
