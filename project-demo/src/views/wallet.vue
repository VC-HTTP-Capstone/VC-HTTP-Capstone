<template lang="html">
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="child_center1">
      <div class="sweep">

        <center>
          <br><br><br><br>
          <h2>Wallet</h2>
          <h5>
            Check Current Wallet Status
          </h5>
          <br><br>
          <div id="logged-in">
            <p><strong style="color:white" class="text bg-dark">User</strong> </p><p> <span class="text2" id="username"></span></p>
            <br><br>
            <p><strong style="color:white" class="text bg-dark">Wallet Contents</strong></p><p> <span class="text3" id="walletContents"></span></p>

            <a style="color:white" class="btn conf-btn" id="logoutButton">remove</a>
          </div>

          <div class="hide" id="logged-out">
            <a class="waves-effect waves-light btn" id="loginButton">Login</a>
          </div>
        </center>
      </div>
    </div>
    <div class="child_side1"></div>
  </div>


</template>

<script>
import test from '../../test.js'
export default {
  mounted(){
    test.registerWalletWithBrowser();
    test.onDocumentReadyforwallet(() => {
      const loginBtn = document.getElementById('loginButton');
      const logoutBtn = document.getElementById('loginButton');
      window.onload = function() {
        loginBtn.addEventListener('click', test.login);
      }
      window.onload = function() {
        logoutBtn.addEventListener('click', test.logout);
      }
      test.refreshUserArea();
    });
  }
}
</script>

<style lang="css" scoped>
  .center {
    text-align: center;
  }
  .parent1 {
    display: flex;
    height: 100vh;
  }
  .child_side1 {
    flex: 1;
    background-color: #FDF5E6;
  }
  .child_center1 {
    flex: 4;
  }
  .conf-btn {
    width: 40%;
    height: 50px;
    border: 0;
    outline: none;
    border-radius: 40px;
    margin-top: 30px;
    margin-right: 10px;
    margin-left: 10px;
    color: white;
    font-size: 1.2em;
    letter-spacing: 2px;
    padding-top: 7px;
  }
  .text{
    display:inline-block;
    font-size:1.2em;
    margin-top: 10px;
    border-radius: 40px;
    border-color: white;
    border: 2px solid lightgray;
    width: 20%;
    padding: 10px 20px;
  }
  .text2{
    display:inline-block;
    width:60%;
    font-size:1.2em;
    margin-top: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 40px;
    padding: 10px;
    border: 2px solid lightgray;
    outline: none;
  }
  .text3{
    display:inline-block;
    width:80%;
    font-size:1.2em;
    margin-top: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 40px;
    padding: 10px 20px;
    border: 2px solid lightgray;
    outline: none;
  }
  .marg{
    margin-top:70px;
  }
  @keyframes sweep {
    0%    {opacity: 0; transform: translateX(-10px)}
    100%  {opacity: 1; transform: translateX(0)}
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slide-in {
     0% {
      top: -300px;
    }
    100% {
      top: 0;
    }
  }

  @keyframes scaleDown {
     0% {
      transform: scale(1);
    }
     10% {
      transform: scale(0.7);
    }
     95% {
      transform: scale(0.7);
    }
     100% {
      transform: scale(1);
    }
  }

  @keyframes reveal-info {
    0% {
      height: 0;
    }
    5% {
      height: 350px;
    }
    95% {
      height: 350px;
    }
    100% {
      height: 0;
    }
  }

  @-webkit-keyframes blink{
     0% {opacity:0;}
     100% {opacity:1;}
  }
  @-moz-keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
  }
  @keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
  }
  .blinking{
    -webkit-animation:blink 1.5s ease-in-out infinite alternate;
    -moz-animation:blink 1.5s ease-in-out infinite alternate;
    animation:blink 1.5s ease-in-out infinite alternate;
  }
 .sweep{
   animation: sweep 1.5s ease-in-out;
 }
 .fadedin{
   animation: fade-in 1.5s ease-in-out;
 }
 h2, h5 {
   font-family: 'Abel', sans-serif;
 }
</style>
