import React from 'react';
import {Link} from "react-router-dom";
import Quote from '../components/Quote';


function Navbar () {

 function toggleQuote (){
    let quoteElement =   document.querySelector(".my_quote")
    if(quoteElement.style.display === "none"){
      quoteElement.style.display = ""
    } else {
      quoteElement.style.display = 'none';
    }
 }

  return (
    <div className="my_navbar">
      <nav className="navbar">
        <ul>
            <li>
              
            <Link to={"/user_options"}>
              <i className="fas fa-arrow-circle-left" ></i>
            </Link>
            </li>
          
            <li>
              <img onClick={toggleQuote} className="daily-quote-icon" src={process.env.PUBLIC_URL + '/img/daily_quote_clear.png'} alt="daily-quote" 
              />
            </li>
          </ul>

          <Quote />
      </nav>
    </div>
  );
  };

export default Navbar;

