<template lang="html">
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="child_center1 sweep">
      <center>
        <div id="logged-in">
          <div class="marg" id="confirm">
            <p><strong style="color:white" class="text bg-dark">Wallet</strong> </p><p> <span class="text1" id="requestOrigin"></span></p>

            <p><strong style="color:white" class="text bg-dark">Request</strong> </p><p><span class="text3" id="requestReason"></span></p>
          </div>

          <div id="userArea">
            <p><strong style="color:white" class="text bg-dark">User</strong> </p><p> <span class="text2" id="username"></span></p>
            <p><strong style="color:white" class="text bg-dark">Credential</strong></p><p> <span class="text3" id="walletContents"></span></p>
          </div>
        </div>

        <div class="card-panel hide" id="logged-out">
          <p>
            In order to share a credential with the requesting party:
          </p>

          <ol>
            <li>Register a wallet with your browser (for example,
              the <a href="https://chapi-demo-wallet.digitalbazaar.com/">Demo Wallet</a>).</li>
            <li>Click the <strong>Login</strong> button.</li>
            <li>Click on a Share button next to an appropriate credential.</li>
          </ol>

          <a class="waves-effect waves-light btn" id="loginButton">Login</a>
        </div>
      </center>
    </div>
    <div class="child_side1"></div>
  </div>
</template>

<script>
import test from '../../test.js'

export default {
  mounted() {
    test.onDocumentReadyforwallet(() => {
    //document.getElementById('loginButton').addEventListener('click', test.login);
    document.getElementById('logoutButton').addEventListener('click', test.logout);
    test.refreshUserArea();
    
  })
  test.handleGetEvent();
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
  .text1{
    display:inline-block;
    width:40%;
    font-size:1.2em;
    margin-top: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 40px;
    padding: 10px;
    border: 2px solid lightgray;
    outline: none;
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
