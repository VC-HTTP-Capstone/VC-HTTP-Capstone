<template>
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="child_center1">
      <br><br><br><br><br><br><br><br><br><br><br>
      <center>
        <div class="blink">
          <h2 class="fadedin">Credential Issuer page</h2>
          <br><br>
          <h5 class="sweep">If you want to issue verifiable credeatial, Click on 'receive button'</h5>
        </div>
        <div>
          <button id='receiveButton' class="btn rcv-btn fadedin">Receive</button>
        </div>
      </center>
    </div>
    <div class="child_side1"></div>
  </div>
</template>

<script>
  import test from '../../test.js'
  //document.getElementById('loginButton').addEventListener('click', test.login);
  //test.refreshUserArea();
  test.ready(() => {
    document.getElementById('receiveButton').addEventListener('click', test.onClickReceive);
    console.log('Document ready.')
  })
  export default {
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
  .rcv-btn {
    width: 40%;
    height: 50px;
    border: 0;
    outline: none;
    border-radius: 40px;
    margin-top: 50px;
    color: white;
    font-size: 1.2em;
    letter-spacing: 2px;

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
