<template>
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="child_center1">
      <center>
        <div class="marg-tb2">
          <img src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276" style="vertical-align:top; margin-right:20px;" height="100" width="100"/>
          <span style="font-size:60px; margin-bottom:100px;">증명서 발급</span>
        </div>
      </center>
      <div style="margin-top:100px;" class="fadedin">
        <div class="left">
          <center>
            <img src="../images/attending.png" style="margin-left: 35px" width="300" height="250">
            <div class="marg-tb">
              <label style="font-size : 20px;"><input type="radio" name="attend" v-model="radioValues" value="attending" v-on:click="ttest">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;재학증명서</label>
            </div>
          </center>
        </div>
        <div class="right">
          <center>
            <img src="../images/graduate.png" width="300" height="250">
            <div class="marg-tb">
              <label style="font-size : 20px;"><input type="radio" name="graduate" v-model="radioValues" value="graduate" v-on:click="ttest">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;졸업증명서</label>
            </div>
          </center>
        </div>
        <div>
          <center>
            <div v-if="radioValues == 'attending'">
              <router-link to = "/issuer3">
                <button class="btn rcv-btn fadedin" type="button" v-on:click="testt">확인</button>
              </router-link>
            </div>
            <div v-else-if="radioValues == 'graduate'">
              <router-link to = "/issuer4">
                <button class="btn rcv-btn fadedin" type="button" v-on:click="testt">확인</button>
              </router-link>
            </div>
          </center>
        </div>
      </div>
    </div>
    <div class="child_side1"></div>
  </div>
</template>

<script>
  import test from '../../test.js'


  export default {
    data(){
        return{
            radioValues: '',
        }
    },
    mounted(){
      test.ready(() => {
        document.getElementById('confirmbutton').addEventListener('click', test.cli);
      })
    },
    methods:{
      ttest: function(){
        console.log(this.radioValues);
      },
      testt: function(){
        document.getElementById('confirmbutton').addEventListener('click', test.cli);
      },
      test1 :function(){
        console.log(this.radioValues);
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
    padding: 20px;
    width: 40%;
    border-radius: 5px;
    top: 25%;
    text-align: center;
    margin-bottom: 100px;
    margin-top: 50px;
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
    height: 30px;
    opacity: 1;
    width: 20px;
}
.marg-tb{
  margin-top: 40px;
  margin-bottom: 30px;
}
.marg-tb2{
  margin-top: 40px;
  margin-bottom: 20px;
}
h2, h5 {
  font-family: 'Abel', sans-serif;
}
.t-font{
  font-family: 'Abel', sans-serif;
}
.rcv-btn {
  border: 0;
  outline: none;
  border-radius: 40px;
  margin-top: 10px;
  color: white;
  font-size: 1.2em;
  letter-spacing: 2px;

}
</style>
