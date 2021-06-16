import { createGlobalStyle } from 'styled-components'



export const HomeStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  
  body{
  font-family: 'Roboto', sans-serif;
  // min-height: 100vh;
  background: #c9e7f3;
  // overflow: hidden;
  }
  
  
  .main-container{
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 3rem 2rem 0 0;
  }
  
  .landing-page{
  display: grid;
  grid-template-columns: 1fr;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  }
  
  .title-text{
  font-size: 4rem;
  }
  
  .listen-relax-live{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 92px;
  font-size: 2rem;
  font-weight: 500;
  }
  
  .bird-image{
  width: 600px;
  align-self: center;
  margin-left: 1.0px;
  /* mix-blend-mode: normal; */
  object-fit: cover;
  
  }
  
  /********  bottom/footer  section**********/
  .bottom-banner {
    display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  margin-top: 26px;
  width: 100%;
  }
  .overlap-group2 {
  background-color: #ffffff;
  
  width: 603px;
  padding: 0;
  margin: 20px;
  }
  .overlap-group {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 17px 0;
  }
  
  .start-here {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 92px;
  font-size: 2rem;
  font-weight: 500;
  }
  
  .start-here button{
  border: none;
  color: rgb(7, 7, 7);
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  }
  
  button{
  background-color: white; 
  color: black; 
  border: 2px solid #008CBA;
  }
  
  button:hover {
  background-color: #2ea8de;
  color: white;
  }
  
  
  /********************
    media queries
  *********************/
  
  /*Big smartphones [412px -> 600px]*/
  @media only screen and (max-width: 600px){
    .main-container{
    width: 85%;
    margin-left: 40px;
    }
    .bird-image{
    height: 100%;
    width: 100%
    }
    .overlap-group1{
    padding: 15px 0 0px 0;
    }
    .title-text{
    font-size: 2.5rem;
    }
    .listen-relax-live{
    font-size: 1.3rem;
    padding: 0 0 30px 0;
    }
    .bottom-banner{
    height: 70%;
    width: 109%;
    }
  }
  
  /*Small smartphones [350px -> 410px]*/
  @media only screen and (max-width: 410px) and (min-width: 321px){
    .main-container{
    width: 80%;
    /* margin-top: 122px; */
    margin: 0px 0 0 55px;
    }
    .landing-page
    .bird-image{
    height: 50%;
    width: 100%
    }
    .title-text{
    font-size: 2.5rem;
    }
    .bottom-banner{
    height: 70%;
    width: 116%;
    }
    .listen-relax-live{
    font-size: 1.3rem;
    }
    .start-here{
    font-size: 1rem;
    }
  
  
  }
  
  /*  280 ->  349 */
  @media only screen and (max-width: 320px) and (min-width: 280px){
    .main-container{
    width: 85%;
    margin-top: 0px;
    }
    .title-text{
    font-size: 2.1rem;
    }
    .listen-relax-live{
    font-size: 1.1rem;
    margin-top: -15px;
    }
    .start-here{
    font-size: 1rem;
    }
    .bottom-banner{
    height: 92%;
    width: 116%;
    }
    .overlap-group2 {
    background-color: #ffffff;
    width: 603px;
    padding: 0;
    margin: 17px;
    }

  }
  
  


`;
