<template>
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="child_center1">
      <div>
        <center>
          <br><br>
          <h2 class="fadedin">Credential Verifier page</h2>
          <br><br>
          <h5 class="sweep">If you want to verify verifiable credential, Click on <br>'proof of enrollment' or 'diploma'</h5>
          <br><br>
          <div class="fadedin">
            <div class="left">
            <center>
            <img src="../images/attending.png" style="margin-left: 135px" width="300" height="250">
            </center>
            </div>
            <div class="right">
            <center>
            <img src="../images/graduate.png" style="margin-right: 135px" width="300" height="250">
            </center>
          </div>
      </div>
          <div class="fadedin">
            <router-link to = "/verifier-inschool">
              <button style="color:white" class="btn conf-btn fadedin" id="inSchoolButton">proof of enrollment</button>
            </router-link>
            <router-link to = "/verifier-graduation">
              <button style="color:white" class="btn conf-btn fadedin" id="graduationButton">diploma</button>
            </router-link>
          </div>
        </center>
      </div>
    </div>
    <div class="child_side1"></div>
  </div>
</template>

<script>
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
  .sweep{
    animation: sweep 1.5s ease-in-out;
  }
  .fadedin{
    animation: fade-in 1.5s ease-in-out;
  }
  h2, h5 {
    font-family: 'Abel', sans-serif;
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
</style>