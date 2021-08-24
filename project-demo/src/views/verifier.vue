<template>
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="child_center1">
      <div>
        <center>
          <br><br>
          <h2 class="fadedin">Credential Verifier page</h2>
          <br><br>
          <h5 class="sweep">If you want to verify verifiable credeatial, Click on 'Request button'</h5>
          <a style="color:white" class="btn conf-btn fadedin" id="requestButton">Request</a>
        </center>
      </div>
      <hr class="halfline">
      <div id="resultsPanel">
        <center>
          <p><strong style="color:white" class="text bg-dark sweep">Result of Request</strong></p>
        </center>
        <code style="color:black" id="getResults" class="fadedin"></code>
      </div>
    </div>
    <div class="child_side1"></div>
  </div>
</template>

<script>
  import test from '../../test.js'

  test.ready(() => {
    document.getElementById('requestButton').addEventListener('click', test.onClickRequest());
    console.log('Document ready.')
  })







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
  .marg{
    margin-top:70px;
  }
  .text{
    display:inline-block;
    font-size:1.2em;
    margin-top: 10px;
    border-radius: 40px;
    border-color: white;
    border: 2px solid lightgray;
    width: 40%;
    text-align: center;
    padding: 10px 20px;
  }
  .halfline {
    border-width: 5px;
    margin-top: 70px;
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
