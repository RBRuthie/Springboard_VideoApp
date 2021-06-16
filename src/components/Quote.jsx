import React from 'react';
import {useEffect, useState} from 'react';



const Quote = () => {
  const [quote, setQuote] = useState({})
  useEffect(() =>{
    fetch("/quote")
    .then(response => response.json())
    .then(data => {
      setQuote(data)
    })
  },[])

const hideMe = () => {
  let quoteElement = document.querySelector(".my_quote")
  quoteElement.style.display = "none";
}

  return (
    <div className="my_quote" style={{display: "none"}}>
      <div className="popup quote-container">

        <div className="container">
          <div className="contentBox">
                

              <div className="content blockquote">
              <div onClick={hideMe} className="close">X</div>
                    <div>
                      {/* <h3>Daily Quote:</h3> */}
                      <h4><span className="quotes">" {quote.quote} "</span></h4>
                      <h5>- {quote.author}</h5>
                    </div>
              </div>
          </div>

        </div>
      </div>
        
    </div>
  )
}

export default Quote;
