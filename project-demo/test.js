// function onDocumentReady(fn) {
//   if(document.readyState !== 'loading') {
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }

const WALLET_LOCATION = window.location.origin + '/';
const workerUrl = WALLET_LOCATION + 'wallet-worker';
const MEDIATOR = 'https://authn.io/mediator' + '?origin=' +
  encodeURIComponent(window.location.origin); // function that encode from specific character of URI(uniform Resource Identifier) to character of UTF-8
  // window.location.origin : location object의 origin -> 프로토콜 + URL의 도메인 + 포트(IE11.0 , opera 15.0 그리고 다른 브라우저 가능)

async function registerWalletWithBrowser() {
  await credentialHandlerPolyfill.loadOnce(MEDIATOR);

  console.log('Polyfill loaded.');

  console.log('Installing wallet worker handler at:', workerUrl);

  const registration = await WebCredentialHandler.installHandler({url: workerUrl});

  await registration.credentialManager.hints.set(
    'test', {
      name: 'TestUser',
      enabledTypes: ['VerifiablePresentation', 'VerifiableCredential', 'AlumniCredential']
      // enabledTypes: ['VerifiablePresentation']
    });

  console.log('Wallet registered.');
}

async function activateWalletEventHandler() {
  try {
    await credentialHandlerPolyfill.loadOnce(MEDIATOR);
  } catch(e) {
    console.error('Error in loadOnce:', e);
  }

  console.log('Worker Polyfill loaded, mediator:', MEDIATOR);

  return WebCredentialHandler.activateHandler({
    mediatorOrigin: MEDIATOR,
    async get(event) {
      console.log('WCH: Received get() event:', event);
      return {type: 'redirect', url: WALLET_LOCATION + 'wallet-ui-get'};
    },
    async store(event) {
      console.log('WCH: Received store() event:', event);
      return {type: 'redirect', url: WALLET_LOCATION + 'wallet-ui-store'};
    }
  })
}

function onDocumentReadyforissuer(fn) {
  if(document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function onDocumentReadyforstore(fn) {
  if(document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function onDocumentReadyforwallet(fn) {
  if(document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function foo() {
  console.log("foo");
}

function login() {
  saveCurrentUser('jmk5315');
  refreshUserArea();
}

function logout() {
  const walletContents = Cookies.get('walletContents');

  if(!walletContents) {
    return alert('There is no Credential');
  }
  else {
    resetCurrentUser();
    clearWalletDisplay();
    clearWalletStorage();
    refreshUserArea();
  }
}


function refreshUserArea({shareButton} = {}) {
  const currentUser = loadCurrentUser();
  document.getElementById('username').innerHTML = currentUser; // username에 해당하는 HTML을 currentUser로 변경

  // if(currentUser) {
  //   document.getElementById('logged-in').classList.remove('hide'); //classList : 요소의 클래스 이름을 반환, remove()를 통해 요소의 클래스 제거
  //   document.getElementById('logged-out').classList.add('hide'); //로그아웃 상태 숨기기
  // } else {
  //   //not logged in
  //   document.getElementById('logged-in').classList.add('hide');
  //   document.getElementById('logged-out').classList.remove('hide');
  // }

  // Refresh the user's list of wallet contents
  clearWalletDisplay();
  const walletContents = loadWalletContents();

  if(!walletContents) {
    return addToWalletDisplay({text: 'none'});
  }

  for(const id in walletContents) {
    const vp = walletContents[id];
    // TODO: Add support for multi-credential VPs
    const vc = Array.isArray(vp.verifiableCredential) // 인자가 array인지 판별
      ? vp.verifiableCredential[0]
      : vp.verifiableCredential;
    addToWalletDisplay({
      text: `${getCredentialType(vc)} from ${vc.issuer}`,
      vc,
      button: shareButton
    });
  }
}

/**
 * Wallet Storage / Persistence
 */

function loadWalletContents() {
  const walletContents = Cookies.get('walletContents'); // walletContents에 해당하는 value 가져오기
  if(!walletContents) {
    return null;
  } // 비어있는 경우 예외처리
  return JSON.parse(atob(walletContents)); // walletContents의 value를 decode하여 (우리가 알아 볼수있게) JSON 문자열의 구문을 분석하고,
                                           // 그 결과에서 JavaScript 값이나 객체를 생성
}

function clearWalletStorage() {
  Cookies.remove('walletContents', {path: ''});
}

function storeInWallet(verifiablePresentation) {
  const walletContents = loadWalletContents() || {};
  const id = getCredentialId(verifiablePresentation);
  walletContents[id] = verifiablePresentation;

  // base64 encode the serialized contents (verifiable presentations)
  const serialized = btoa(JSON.stringify(walletContents));
  Cookies.set('walletContents', serialized, {path: '', secure: true, sameSite: 'None'});
}

function clearWalletDisplay() {
  const contents = document.getElementById('walletContents');
  while(contents.firstChild) // firstChild : dom tree에서 첫번째 노드
    contents.removeChild(contents.firstChild); //removeChild : 해당 노드 제거
}

function addToWalletDisplay({text, vc, button}) {
  const li = document.createElement('li'); // create 'li' tag, 새로운 element 반환
  console.log('li is created');

  if(button) {// button이 차있다면?
    const buttonNode = document.createElement('button'); // create 'a' tag
    buttonNode.classList.add('waves-effect', 'waves-light', 'btn-small'); // 만든 a tag에 3가지 class 추가
    buttonNode.setAttribute('id', vc.id); // Element.setAttribute('attributename','attributevalue') id 속성을 vc.id로 변경 ex) setAttribute('href', 'www.naver.com')으로 하면 href = '#'의 #이 www.naver.com 으로 set
    buttonNode.appendChild(document.createTextNode(button.text)); // button의 text를 text노드로 만들어서 buttonNode element에 넣어준다.
    li.appendChild(buttonNode); // 그걸 li element에 넣어버림
  }

  li.appendChild(document.createTextNode(' ' + text));

  document.getElementById('walletContents')
    .appendChild(li);

  if(button) {
    document.getElementById(vc.id).addEventListener('click', () => {
      const vp = {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ],
        "type": "VerifiablePresentation",
        "verifiableCredential": vc
      }
      console.log('wrapping and returning vc:', vp);
      button.sourceEvent
        .respondWith(Promise.resolve({dataType: 'VerifiablePresentation', data: vp}));
    });
  }
}

function getCredentialId(vp) {
  const vc = Array.isArray(vp.verifiableCredential)
    ? vp.verifiableCredential[0]
    : vp.verifiableCredential;
  return vc.id;
}

function getCredentialType(vc) {
  if(!vc) {
    return 'Credential'
  };
  const types = Array.isArray(vc.type) ? vc.type : [vc.type];
  return types.length > 1 ? types.slice(1).join('/') : types[0];
}

/**
 * User Storage / Persistence
 */

function loadCurrentUser() {
  return Cookies.get('username') || ''; // username의 value cookie read
}

function saveCurrentUser(name) {
  console.log('Setting login cookie.');
  Cookies.set('username', name, {path: '', secure: true, sameSite: 'None'});
}

function resetCurrentUser() {
  console.log('Clearing login cookie.');
  Cookies.remove('username', {path: ''});
  console.log("abc");
}



async function onClickReceive() {
  saveCurrentUser('jmk5315');
  // document.getElementById('storeResults').innerHTML = ''; // clear results

  // Construct the WebCredential wrapper around the credential to be stored
  const credentialType = 'VerifiablePresentation';
  const webCredentialWrapper = new WebCredential(
    credentialType, testCredential, {
      recommendedHandlerOrigins: [
        'https://localhost:8080',
        'https://chapi-demo-wallet.digitalbazaar.com'
      ]
    });

  //document.getElementById('storeResults').innerText = 'Storing credential...';

  // Use Credential Handler API to store
  const result = await navigator.credentials.store(webCredentialWrapper);

  //document.getElementById('resultsPanel').classList.remove('hide');
  document.getElementById('storeResults').innerText = JSON.stringify(result, null, 2);

  console.log('Result of receiving via store() request:', result);
  //
  // if(!result) {
  //   document.getElementById('storeResults').innerHTML = 'null result';
  //   return;
  // }

  // document.getElementById('storeResults').innerHTML = JSON.stringify(result.data, null, 2);
}

const testCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "type": "VerifiablePresentation",
  "verifiableCredential": [{
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.edu/credentials/",
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "issuer": "https://github.com/VC-HTTP-Capstone",
    "issuanceDate": "2010-01-01T19:73:24Z",
    "credentialSubject": {
      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    },
    "proof": {
      "type": "RsaSignature2018",
      "created": "2017-06-18T21:19:10Z",
      "proofPurpose": "assertionMethod",
      "verificationMethod": "https://example.edu/issuers/keys/1",
      "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM"
    }
  }]
};

// const testCredential = {
//   "@context": [
//     "https://www.w3.org/2018/credentials/v1",
//     "https://www.w3.org/2018/credentials/examples/v1"
//   ],
//   "type": "VerifiablePresentation",
//   "verifiableCredential": [{
//     "@context": [
//       "https://www.w3.org/2018/credentials/v1",
//       "https://www.w3.org/2018/credentials/examples/v1"
//     ],
//     "id": "http://example.edu/credentials/",
//     "type": ["VerifiableCredential", "UniversityDegreeCredential"],
//     "issuer": "https://github.com/VC-HTTP-Capstone",
//     "issuanceDate": "2010-01-01T19:73:24Z",
//     "credentialSubject": {
//       "id": "did:example:ebfeb1f712ebc6f1c276e12ec21"
//     },
//     "proof": {
//       "type": "RsaSignature2018",
//       "created": "2017-06-18T21:19:10Z",
//       "proofPurpose": "assertionMethod",
//       "verificationMethod": "https://example.edu/issuers/keys/1",
//       "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM"
//     }
//   }]
// };

function ready(fn) {
  if(document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

async function handleStoreEvent() {
  const event = await WebCredentialHandler.receiveCredentialEvent();
  console.log('Store Credential Event:', event.type, event);

  const credential = event.credential;

  // document.getElementById('requestOrigin').innerHTML = event.credentialRequestOrigin;
  // document.getElementById('hintKey').innerHTML = credential.hintKey || '';
  // document.getElementById('credentialContents').innerHTML = JSON.stringify(credential.data, null, 2);

  // Display the credential details, for confirmation
  const vp = credential.data;
  const vc = Array.isArray(vp.verifiableCredential)
    ? vp.verifiableCredential[0]
    : vp.verifiableCredential;
  document.getElementById('credentialType').innerHTML = getCredentialType(vc);
  document.getElementById('credentialIssuer').innerHTML = vc.issuer;

  // Set up the event handlers for the buttons
  document.getElementById('cancelButton').addEventListener('click', () => {
    returnToUser(event, null); // Do nothing, close the CHAPI window
  });

  document.getElementById('confirmButton').addEventListener('click', () => {
    document.getElementById('userArea').classList.remove('hide');
    document.getElementById('confirm').classList.add('hide');

    storeInWallet(credential.data); // in mock-user-management.js
    refreshUserArea();
  });

  document.getElementById('doneButton').addEventListener('click', () => {
    returnToUser(event, vp);
  });
}

function returnToUser(storeEvent, data) {
  storeEvent.respondWith(new Promise(resolve => {
    return data
      ? resolve({dataType: 'VerifiablePresentation', data})
      : resolve(null);
  }))
}

async function handleGetEvent() {
  const event = await WebCredentialHandler.receiveCredentialEvent();

  console.log('Wallet processing get() event:', event);

  document.getElementById('requestOrigin').innerHTML = event.credentialRequestOrigin;

  const vp = event.credentialRequestOptions.web.VerifiablePresentation;
  const query = Array.isArray(vp.query) ? vp.query[0] : vp.query;

  if(!query.type === 'QueryByExample') {
    throw new Error('Only QueryByExample requests are supported in demo wallet.');
  }

  const requestReason = query.credentialQuery.reason;
  document.getElementById('requestReason').innerHTML = requestReason;

  refreshUserArea({
    shareButton: {
      text: 'Share',
      sourceEvent: event
    }
  });
}

async function onClickRequest() {
  //   document.getElementById('getResults').innerHTML = ''; // clear results
    const credentialQuery =   {
      "web": {
        "VerifiablePresentation": {
          "query": [{
            "type": "QueryByExample",
            "credentialQuery": {
              "reason": "Jmk5315가 팀원인지 검증을 요청합니다.",
              "example": {
                "@context": [
                  "https://w3id.org/credentials/v1",
                  "https://www.w3.org/2018/credentials/examples/v1"
                ],
                "type": ["UniversityDegreeCredential"],
                "credentialSubject": {
                  "id": "did:example:ebfeb1f712ebc6f1c276e12ec21"
                }
              }
            }
          }]
        },
        "recommendedHandlerOrigins": [
          "https://chapi-demo-wallet.digitalbazaar.com",
          "https://localhost:8080"
        ]
      }
    }

    console.log('Requesting credential...');
    document.getElementById('getResults').innerText = 'Requesting credential...';

    const result = await navigator.credentials.get(credentialQuery);

    document.getElementById('resultsPanel').classList.remove('hide');
    document.getElementById('getResults').innerText = JSON.stringify(result, null, 2);

    console.log('Result of get() request:', JSON.stringify(result, null, 2));
    if(result.data.verifiableCredential.credentialSubject.hasOwnProperty('alumniOf')) {
      console.log("앙 졸업띠");
    }
    if(result.data.verifiableCredential.credentialSubject.hasOwnProperty('attendanceOf')) {
      console.log("앙 재학띠");
    }
}


async function onClickRequest2() {
  //   document.getElementById('getResults').innerHTML = ''; // clear results
    const credentialQuery =   {
      "web": {
        "VerifiablePresentation": {
          "query": [{
            "type": "QueryByExample",
            "credentialQuery": {
              "reason": "님 졸업자맞아용?",
              "example": {
                "@context": [
                  "https://w3id.org/credentials/v1",
                  "https://www.w3.org/2018/credentials/examples/v1"
                ],
                "type": ["UniversityDegreeCredential"],
                "credentialSubject": {
                  "id": "did:example:ebfeb1f712ebc6f1c276e12ec21"
                }
              }
            }
          }]
        },
        "recommendedHandlerOrigins": [
          "https://chapi-demo-wallet.digitalbazaar.com",
          "https://localhost:8080"
        ]
      }
    }

    console.log('Requesting credential...');
    document.getElementById('getResults').innerText = 'Requesting credential...';

    const result = await navigator.credentials.get(credentialQuery);

    document.getElementById('resultsPanel').classList.remove('hide');
    document.getElementById('getResults').innerText = JSON.stringify(result, null, 2);

    console.log('Result of get() request:', JSON.stringify(result, null, 2));
    if(result.data.verifiableCredential.credentialSubject.hasOwnProperty('alumniOf')) {
      console.log("앙 졸업띠");
    }
    else {
      console.log("졸업자 아닌데용?");
    }
}


function cli(){
  delete testCredential['verifiableCredential'][0]['credentialSubject']['alumniOf'];
  delete testCredential['verifiableCredential'][0]['credentialSubject']['attendanceOf'];

  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  testCredential['verifiableCredential'][0]['id'] = "http://example.edu/credentials/" + id;
  console.log(testCredential['verifiableCredential'][0]['id']);
  let today = new Date();
  const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "T19:73:24Z";
  console.log(date);
  testCredential['verifiableCredential'][0]["issuanceDate"] = date;
  testCredential['verifiableCredential'][0]["proof"]["created"] = date;


  console.log(testCredential['verifiableCredential'][0]["issuer"]);
  if($('input:radio[name=attend]').is(':checked')){
    testCredential['verifiableCredential'][0]['credentialSubject']['attendanceOf'] = {
      "id": "did:example:c276e12ec21ebfeb1f712ebc6f2",
      "name": {
        "@value": "Hanyang University(ERICA)",
        "@language": "kr",
      }
    }
  }
  else if($('input:radio[name=graduate]').is(':checked')){
    testCredential['verifiableCredential'][0]['credentialSubject']['alumniOf'] = {
      "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
      "name": {
        "@value": "Hanyang University(ERICA)",
        "@language": "kr",
      }
    }
  }

  console.log(testCredential['verifiableCredential'][0]['credentialSubject']['alumniOf']);
  console.log(testCredential['verifiableCredential'][0]['credentialSubject']['attendanceOf']);
  console.log(testCredential['verifiableCredential'][0]['credentialSubject']);

  onClickReceive();
}

const method = {onClickRequest2, cli, registerWalletWithBrowser, handleGetEvent, handleStoreEvent, onClickRequest, foo, onClickReceive, activateWalletEventHandler, ready, onDocumentReadyforstore, onDocumentReadyforwallet, onDocumentReadyforissuer, login, logout, refreshUserArea, clearWalletDisplay, saveCurrentUser};
export default method
