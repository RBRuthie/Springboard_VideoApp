import { createGlobalStyle } from 'styled-components'



export const RegLoginStyle = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0daaaa;
  transition: 0.5s;
}
body.active{
  background: #f25555;

}
.mice{
  width: 100%;
  height: auto;
  padding: 0 30px 60px 30px;
}
.container{
  position: relative;
  width: 740px;
  height: 500px;
  margin: 20px;
}
#blueBg{
  position: absolute;
  top: 40px;
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.2);
  box-shadow: 0 5px 45px rgba(0,0,0,0.15);
}

#blueBg .box{
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


#blueBg .box h2{
  color: #fff;
  font-size: 1.8em;
  font-weight: 500;
  margin: -22px 0 30px 0;
}

#blueBg .box h6{
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  margin: -20px 0 22px 0;
}

#blueBg .box button{
  cursor: pointer;
  padding: 10px 20px;
  background: #fff;
  /* color: #0daaaa; */
  color: #3b3d3d;
  font-size: 18px;
  font-weight: 700;
  border: none;
}

span{
  margin: 0 0 2px 6px;
  color: red;
}

.formBx{
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgb(0, 0, 0, 0.25);
  transition: 0.5s ease-in-out;
  overflow: hidden;

}

/* .active class is added when button is clicked */
.formBx.active {
  left: 50%;
}

.formBx .form{
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;
}

/* sign-in */
.formBx .signinForm{
transition-delay: 0.25s;
}

.formBx.active .signinForm{
left: -100%;
transition-delay: 0s;
}

.forgot{
 font-size: 1.2rem;
 font-weight: 300;
 padding: 30px 0 0 17px;
}

/* sign-up */
.formBx .signupForm{
  left: 100%;
  transition-delay: 0s;
}

.formBx.active .signupForm{
  left: 0;
  transition-delay: 0.25s;
  }



.formBx .form form{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.formBx .form form h3{
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
  font-weight: 500;
}

.formBx .form form input{
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid #333;
}

.formBx .form form input[type="submit"] {
  background: #0daaaa;
  border: none;
  color: #fff;
  max-width: 100px;
  cursor: pointer;
}

.formBx.active .signupForm input[type="submit"]{
  background: #f25555;
}

.formBx .form form .forgot{
  color: #7d7878;
}



// *******  media queries  *********

@media (max-width: 991px){
  .container{
    max-width: 400px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container #blueBg{
    top: 0;
    width: 100%;
    height: 650px;
    
  }

  .formBx{
    width: 100%;
    height: 500px;
    top: 0;
    box-shadow: none;
  }

  #blueBg .box{
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
  }

  .box.signin {
    top: 0;
  }

  .formBx.active{
    left: 0;
    top: 150px;
  }

.mice{
    display: none;
  }

  #blueBg .box h2{
    display: none
  }
  
  #blueBg .box h6{
    color: #fff;
    font-size: 1.7em;
    font-weight: 500;
    margin: -20px 0 22px 0;
  }
}



/*Big smartphones [412px -> 600px]*/
@media only screen and (max-width: 600px){
  .container{
    max-width: 350px;
    height: 631px;
  }

  .container #blueBg {
    top: 0;
    width: 100%;
    height: 650px;
    margin: 0 0 0 28px;
  }

  .formBx {
    width: 100%;
    height: 445px;
    top: 0;
    box-shadow: none;
  }

  #blueBg .box {
    position: absolute;
    width: 100%;
    height: 204px;
    bottom: 0;
  }

  #blueBg .box h6 {
    font-size: 1.5em;
    margin: -20px 0 22px 0;
  }

  .forgot {
    font-size: 1.2rem;
    font-weight: 300;
    padding: 41px 0 0 0px;
 }
}



   /*Small smartphones [350px -> 410px]*/
@media only screen and (max-width: 410px) and (min-width: 400px){

  .container {
    max-width: 338px;
    height: 631px;
  }

  .container #blueBg {
    top: 0;
    width: 98%;
    height: 500px;
    margin: 38px 0 0 34px;
  }

  .formBx {
    width: 100%;
    height: 350px;
    top: 0;
    box-shadow: none;
  }

    #blueBg .box {
      height: 131px;
  }

  .forgot{
    display: none;
  }
}



/*Small smartphones [350px -> 410px]*/
@media only screen and (max-width: 399px) and (min-width: 300px){

  .container {
    max-width: 300px;
    height: 631px;
  }

  .container #blueBg {
    top: 0;
    width: 98%;
    height: 500px;
    margin: 38px 0 0 34px;
  }

  .formBx {
    width: 100%;
    height: 350px;
    top: 0;
    box-shadow: none;
  }

    #blueBg .box {
      height: 131px;
  }

  .forgot{
    display: none;
  }


`;