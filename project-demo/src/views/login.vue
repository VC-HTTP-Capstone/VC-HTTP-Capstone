<template>
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="child_center1">
      <center>
        <div class="marg-tb2">
          <span style="font-size:60px; margin-bottom:100px;">Login</span>
        </div>

        <div style="font-size:20px;" class="ctest fadedin bordering t-font">
          이메일<br><br><input type="text" style="text-align:center;" v-model="email">
          <br><br>
          <hr style="border: 1px solid gray ">
          비밀번호<br><br><input type="password" style="text-align:center;" v-model="password">
          <br>
          <button class="btn rcv-btn fadedin" type="button" v-on:click="SignUp">회원가입</button>
          <button class="btn rcv-btn fadedin" type="button" v-on:click="signIn">로그인</button>
          <button class="btn rcv-btn fadedin" type="button" v-on:click="sendEmail">비밀번호 재설정</button>
          <button class="btn rcv-btn fadedin" type="button" v-on:click="deleteU">회원탈퇴</button>
          <button class="btn rcv-btn fadedin" type="button" v-on:click="signOut">로그아웃</button>
        </div>
      </center>
    </div>
    <div class="child_side1">
      <p style="font-size:30px; margin-left:20px; margin-bottom:20px;">ID</p>
      <hr class="hrst" width = "70%" align="left">
      <p style="font-size:13px;" class="prtid">{{ curUser }}</p>
    </div>
  </div>
</template>

<script>
  import { signOut, deleteUser, sendPasswordResetEmail,getAuth, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
  export default {
    data () {
      return {
        email: '',
        password: '',
        curUser: '',
        a: 1
      }
    },
    methods: {
      SignUp: function() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("회원가입 성공!")
            // ...
            console.log('signin')
            console.log(this.email)
            console.log(this.password)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            alert("회원가입 실패!")
            // ..
          });
      },
      signIn: function() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const user2 = auth.currentUser;
            // ...
            alert("로그인 성공!")
            if(user2){
              this.curUser = user2.email;
            }
            else{
              console.log("bb")
            }
            console.log('login')
            console.log(this.email)
            console.log(this.password)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
            alert("로그인 실패")
          });

      },
      sendEmail: function() {
        const auth = getAuth();
        auth.languageCode = 'ko';
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            alert("이메일 전송 성공!")
            console.log('sendemail')
            console.log(this.email)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            alert("이메일 전송 실패!")
            // ..

          });
      },
      deleteU: function() {
        const auth = getAuth();
        const user = auth.currentUser;
        deleteUser(user)
          .then(() => {
            const user = auth.currentUser;
            this.curUser = user;
            this.email = user.email;
            this.password = user.password;
            alert("회원탈퇴 성공!")
            console.log("delete")
            console.log(this.email)
          })
          .catch((error) => {
          });
      },
      signOut: function(){
        const auth = getAuth();
        signOut(auth).then(() => {
          const user = auth.currentUser;
          this.curUser = user;

          console.log("signout")
          console.log(user)
          this.email = null;
          this.password = null;
          console.log(this.email)
          console.log(this.password)
          alert("로그아웃 성공!")

        }).catch((error) => {
          // An error happened.
        });
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
.ctest{
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
  input[type=password] {
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
  margin-top: 20px;
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
  margin-left: 20px;
  margin-right: 20px;
  color: white;
  font-size: 1.2em;
  letter-spacing: 2px;
}
.prtid {

  margin-left: 25px;
  margin-top: 20px;
}
.hrst{
  margin-left: 20px;
  border: 1px solid gray
}
</style>