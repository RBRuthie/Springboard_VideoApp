import { createGlobalStyle } from 'styled-components'



export const UserOptionsStyle = createGlobalStyle`


*

{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Catamaran', sans-serif;
  line-height: 1.6;
  color: #333;
  background: #ffffff;
  min-height: 100vh;
}

.options-navbar {
  font-size: 1.2rem;
  margin: -64px 0 0 0;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}

 .options-navbar .options-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
}

.options-container {
  max-width: 1150px;
  margin: auto;
  /* overflow: hidden; */
  padding: 0 2rem 0 0;
}

.options-navbar ul{
  display: flex;
  justify-self: flex-start;
  align-items: center;
  justify-content: center;
}


.options-container .nav-right{
  padding: 23px 0 0 0;
  display: flex;
  justify-self: end;
}

.options-navbar a:hover {
  color: rgb(246, 11, 11);
}

.title-div h1{
  text-align: center;
  padding: 0px 0px 8px 0;
  margin: -20px 0 20px 0;
}

h3,
h4
{
  color: black;
}

.logout{
  font-size: 1.5rem;
}
.logout:hover{
  color: red;
}
.music-icon{
  margin: 0 6px 0 0;
}

 ul {
  list-style: none;
}




/***************************************************************** 
                                  BODY
**************************************************************** */


* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  margin: 2rem;
  color: #37474f;
}

.wrapper-flex {
  display: flex;
  justify-content: space-around;    
  flex-wrap: wrap;
  margin: 0 auto;                       
  max-width: 950px;  /* added, 3 * 250px + margin/gutter */
}

.container {
  overflow: hidden;
  box-shadow: 0px 2px 8px 0px #b0bec5;
  background-color: white;
  text-align: center;
  border-radius: 1rem;
  position: relative;
  width: 300px;
  margin-bottom: 1.8rem;
  margin-left: 1rem;
  padding: 0px 0px 0 0;
}

.profile-img {
  width: 8rem;
  // clip-path: circle(60px at center);
  margin: 0 ;
}

.name {
  font-weight: bold;
  font-size: 1.5rem;
}

.description {
  margin: 1rem 2rem;
  font-size: 1rem;
}

.btn {
  border-radius: 3px;
  border: 0;
  color: white;
  padding: 20px 0 20px 0;
  width: 100%;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
}

.btn, #study-btn {
  background: #f504ca;
}

.btn, #relax-btn {
  background: #dadb06;
}

.btn, #sleep-btn {
  background: #0449fa;
}

.btn, #mindfull-btn{
  background: #fe7f0c;
}

.btn, #chores-btn {
  background: #b300ff;
}

.btn, #exercise-btn{
  background: #46c432;
}


@media (max-width: 1028px){
  .wrapper-flex{
    max-width: 712px;
  }
} 



@media only screen and (max-width: 712px) and (min-width: 600px){
  .wrapper-flex{
    max-width: 312px;
  }

  .title-div h1 {
    font-size: 1.2rem;
  }
  .nav-left{
    font-size: .8rem;
  }
  .logout {
    font-size: 1.4rem;
    padding: 0px;
  }
  

}



@media only screen and (max-width: 599px) and (min-width: 445px){

  .title-div h1 {
    font-size: 1rem;
  }
  .nav-left {
    font-size: .8rem;
    margin: 0 0 0 17px;
  }
  .nav-left h1{
    font-size: 1rem;
    margin: 0 0 0 1px;
  }
  .nav-right{
    padding: 23px 0 0 40px;
  }
  .logout {
    font-size: 1rem;
    padding: 0px;
  }
  .container{
    width: 70%;
    margin-left: 4.1rem;
  }

}


@media only screen and (max-width: 443px) and (min-width: 393px){
  .title-div h1 {
    font-size: 1.1rem;
    margin: -16px 68px 17px 0;
  }
  .nav-left {
    margin: 0 6px 0 10px;
    width: 100%;
  }
  .nav-left h1{
    font-size: 1rem;
    margin: 0 0 0 -5px;
  }
  .logout {
    font-size: 1.2rem;
    padding: 0px;
  }
  .options-navbar {
    margin: -50px 0 0 -26px;
  }
  .container{
    width: 80%;
    margin-left: 1.1rem;
  }


}



@media only screen and (max-width: 392px) and (min-width: 321px){
  .title-div h1 {
    font-size: .9rem;
    margin: -16px 68px 17px 0;
  }

  .nav-left {
    margin: 0 0px 0 28px;
    width: 100%;
  }

  .nav-left h1{
    font-size: 1rem;
    margin: 0 0 0 -5px;
  }

  .logout {
    font-size: 1rem;
    margin: 0 -66px 0 0px;
  }

  .options-navbar {
    margin: -50px 0 0 -36px;
  }

  .container{
    width: 79%;
    margin-left: 1.1rem;
  }

  .options-container .nav-right {
    padding: 23px 27px 0 15px;
    display: flex;
    justify-self: end;
  }
}


@media only screen and (max-width: 320px){
  .title-div h1 {
    font-size: .9rem;
    margin: -16px 57px 17px 0;
  }

  .options-container .nav-right {
    padding: 23px 3px 0 0;
    display: flex;
    justify-self: end;
  }

  .nav-left {
    margin: 0 6px 0 19px;
    width: 100%;
  }

  .nav-left h1{
    font-size: 1rem;
    margin: 0 0 0 -5px;
  }

  .logout {
    font-size: 1rem;
    margin: 0 -66px 0 0px;
  }

  .options-navbar {
    margin: -50px 0 0 -36px;
  }

  .container{
    width: 80%;
    margin-left: 0.3rem;
  }


}
`;
