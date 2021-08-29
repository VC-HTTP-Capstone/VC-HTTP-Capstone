<template>
  <div class="parent">
    <div class="child_side"></div>
    <div class="child_center">
      <div><h2 class="topic blinking">Project Topic : HTTP interface based Verifiable Credential </h2>
        <ul>
          <details>
            <summary class="explain">프로젝트 개요</summary>
            <p class="explain">분산ID(DID)기반의 자기주권신원(Self-Sovereign Identity) 생태계에서 신원 정보 유통 매개체인 VC(Verifiable Credential)의 웹 환경 사용성을 제공하기 위해 VC HTTP 인터페이스을 구현하고자 한다.</p>
          </details>
          <details>
            <summary class="explain">추진 배경</summary>
            <p class="explain">최근 DID 기반의 자기주권신원(Self-sovereign Identity)에 대한 관심과 필요성이 대두 되면서, 이를 활용한 각종 증명과 신분증명 서비스들이 구축되고 있다. 현재 증명서의 데이터 양식은 W3C 표준화는 완료되었고
               이를 웹 환경에서 교환하는 프로토콜은 아직 표준화 중에 있어, 이를 선제적으로 지원함으로써 향후 서비스 확대에 도움을 주고 사용자 편의를 증진 시킬 수 있다.</p>
          </details>
          <details>
            <summary class="explain">개발 목표</summary>
            <p class="explain">
              Initial DID 기반으로 VC HTTP를 지원하는 Verifiable Credential HTTP Interface 모듈을 만들고, 이를 활용한 demo 서비스를 직접 구현한다.
            </p>
          </details>
          <details>
            <summary class="explain">참고 자료</summary>
            <p class="explain">
              <li>
                <a href="https://freecontent.manning.com/the-basic-building-blocks-of-ssi/">https://freecontent.manning.com/the-basic-building-blocks-of-ssi/</a>
              </li>
              <li><a href="https://docs.google.com/presentation/d/1MeeP7vDXb9CpSBfjTybYbo8qJfrrbrXCSJa0DklNe2k/edit#slide=id.p1">https://docs.google.com/presentation/d/1MeeP7vDXb9CpSBfjTybYbo8qJfrrbrXCSJa0DklNe2k/edit#slide=id.p1</a></li>
              <li><a href="https://www.w3.org/TR/did-core/">https://www.w3.org/TR/did-core/</a></li>
              <li><a href="https://github.com/digitalbazaar/chapi-demo-wallet">https://github.com/digitalbazaar/chapi-demo-wallet</a></li>
              <li><a href="https://w3c-ccg.github.io/vc-http-api/">https://w3c-ccg.github.io/vc-http-api/</a></li>
            </p>
          </details>
        </ul>
      </div>
      <div>
        <hr class="mr-t">
        <div class="logo">
          <img class="logo-picture" src="../images/github-logo.jpg" width="100" height="90">
          <a class="gitlink" href="https://github.com/VC-HTTP-Capstone/VC-HTTP-Capstone">https://github.com/VC-HTTP-Capstone/VC-HTTP-Capstone</a>
        </div>
        <hr class="halfline">
        <div class="logo">
          <img class="logo-picture" src="../images/Slack-logo.jpg" width="100" height="90">
          <a class="slacklink" href="https://join.slack.com/t/vc-http-capstone/shared_invite/zt-soapb2du-71HHryNDNlY2XtaSSbE7Tw">https://join.slack.com/t/vc-http-capstone/shared_invite/zt-soapb2du-71HHryNDNlY2XtaSSbE7Tw</a>
        </div>
        <hr class="halfline">
        <div class="left">
          <img class="picture" src="../images/uth.jpg" width="100" height="120">
          <a class="pic-text" style="line-height:110%;">
            <li>이름  :  엄태호 </li>
            <br>
            <li>핸드폰  :  010-2032-7342</li>
            <br>
            <li>이메일  :  qsc7342@hanyang.ac.kr</li>
          </a>
        </div>
        <div class="right">
          <img class="picture" src="../images/lej.jpg" width="100" height="120">
          <a class="pic-text" style="line-height:110%;">
            <li>이름  :  이은제 </li>
            <br>
            <li>핸드폰  :  010-8614-1558</li>
            <br>
            <li>이메일  :  dldmswp3@naver.com</li>
          </a>
        </div>
        <hr class="fclear">
        <div class="left">
          <img class="picture" src="../images/jmk.jpg" width="100" height="120">
          <a class="pic-text" style="line-height:110%;">
            <li>이름  :  정민균 </li>
            <br>
            <li>핸드폰  :  010-6398-3199</li>
            <br>
            <li>이메일  :  jmkg5315@naver.com</li>
          </a>
        </div>
        <div class="right">
          <img class="picture" src="../images/hij.jpg" width="100" height="120">
          <a class="pic-text" style="line-height:110%;">
            <li>이름  :  황인재 </li>
            <br>
            <li>핸드폰  :  010-3520-2696</li>
            <br>
            <li>
              이메일  :  hij2696@hanyang.ac.kr
            </li>
          </a>
        </div>
        <div class="fclear"></div>
      </div>
    </div>
    <div class="child_side"></div>
  </div>
</template>

<script>
  export default {

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
</style>
