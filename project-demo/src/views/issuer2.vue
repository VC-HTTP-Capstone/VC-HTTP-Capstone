<template>
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="child_center1">
      <div class="test fadedin bordering">
        NAME<br><br><input type="text" style="text-align:center;" id="name">
        <br><br>
        <hr style="border: 1px solid gray">
        STUDENT ID<br><br><input type="text" style="text-align:center;" id="id">
        <br>
        <button type="button" id="confirmbutton">확인</button>
      </div>
      <div class="fadedin">
        <div style="
          position: absolute;
          left:20%;
          top:50%;">
        <img src="../images/attending.png" width="360" height="320">
        <label><input type="radio" name="attend" v-model="radioValues" value="attending">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;재학증명서</label>
        <h3>재학증명서 발급하기</h3>
      </div>
      <div style="
      position: absolute;
      left:55%;
      top:50%;">
        <img src="../images/graduate.png" width="360" height="320">
        <label><input type="radio" name="graduate" v-model="radioValues" value="graduate">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;졸업증명서</label>
        <h3>졸업증명서 발급하기</h3>
      </div>
    </div>

  </div>
  <div class="child_side1"></div>
  </div>
</template>

<script>
  import test from '../../test.js'

  test.ready(() => {
    document.getElementById('confirmbutton').addEventListener('click', test.cli);
  })

  export default {
    data(){
        return{
            radioValues: '',
        }
    }
  }
</script>
<style scoped>
details[open] summary ~ * {
  animation: sweep .5s ease-in-out;
}

.logo {
  animation: sweep 1.5s ease-in-out;
}
.right {
  animation: sweep 4s ease-in-out;
}
.left {
  animation: sweep 3s ease-in-out;
}
.parent {
  animation: fade-in 1s ease-in-out;
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

p{
  margin-top: 15px;
  margin-right: 70px;
}
ul{
  font-family: 'Abel', sans-serif;
}
li{
  margin-left: 40px;
}
.topic{
  padding: 5px;
  margin-left: 20px;
  margin-top: 20px;
  font-family: 'Abel', sans-serif;
  font-weight: 900;
}
.explain{
  font-size:1.2em;
  margin-top: 10px;
  margin-left: 30px;
}
.person {
  margin-left: 10px;
}
.logo-picture {
  border-radius: 30%;
  overflow: hidden;
}
.mr-t {
  margin-top: 40px;
  border-width: 5px;
}
.gitlink {
  margin-left: 40px;
}
.logo {
  margin-left: 30px;
}
.slacklink {
  margin-left: 28px;
}
.halfline {
  border-width: 5px;
  margin-top: 20px;
}
.picture {
  border-radius: 30%;
  overflow: hidden;
  margin-left: 30px;
  margin-top: 15px;
  margin-right: 30px;
  float: left;
}
.pic-text {
  margin-left: 20px;
}
.box {
  width:700px;
  height:150px;
  border:5px;
  float:left;
}
div.left {
  width: 50%;
  float: left;
}
div.right {
  width: 50%;
  float: right;
}
.fclear {
  clear: both;
  border-width: 5px;
  margin-top: 180px;
}
.parent {
  display: flex;
}
.child_side {
  flex: 1;
  background-color: #FDF5E6;
}
.child_center {
  flex: 4;
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
.blinking{
  -webkit-animation:blink 1.5s ease-in-out infinite alternate;
  -moz-animation:blink 1.5s ease-in-out infinite alternate;
  animation:blink 1.5s ease-in-out infinite alternate;
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
.fadedin{
  animation: fade-in 1.5s ease-in-out;
}
.test{
    position: absolute;
    padding: 20px;
    width: 30%;
    border-radius: 5px;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  input[type=text] {
      border : 2px solid ForestGreen;
      border-radius : 5px;
  }
.bordering {
  border: 2px solid skyblue;
  border-radius: 5px;
}

input[type="radio"]{
    height: 19px;
    opacity: 1;
    width: 20px;
}
</style>
