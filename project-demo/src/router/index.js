import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main.vue";
import Todo from "../views/todo.vue";
import Schedule from "../views/schedule.vue";
import Working from "../views/working.vue";
import Finish from "../views/finish.vue";
import Wallet from "../views/wallet.vue";
import Verifier from "../views/verifier.vue";
import Walletworker from "../views/wallet-worker.vue";
import Walletuistore from "../views/wallet-ui-store.vue";
import Walletuiget from "../views/wallet-ui-get.vue";
<<<<<<< Updated upstream
import Issuer from "../views/issuer.vue"
import Issuer2 from "../views/issuer2.vue"
import Issuer3 from "../views/issuer3.vue"
import Issuer4 from "../views/issuer4.vue"
=======
import Issuer from "../views/issuer.vue";
import Issuer2 from "../views/issuer2.vue";
import Verifierinschool from "../views/verifier-inschool.vue";
>>>>>>> Stashed changes


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history", //mode를 설정하지 않으면 주소 뒤에 #이 붙는다.
    routes: [
        {
            path: "/", //홈
            redirect: "/main" //홈을 /news로 리다이렉팅
        },
        {
            path: "/main", //path: url 주소
            component: Main // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/issuer", //path: url 주소
            component: Issuer // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/issuer2", //path: url 주소
            component: Issuer2 // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/issuer3", //path: url 주소
            component: Issuer3 // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/issuer4", //path: url 주소
            component: Issuer4 // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/wallet", //path: url 주소
            component: Wallet // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/wallet-worker", //path: url 주소
            component: Walletworker // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/wallet-ui-store", //path: url 주소
            component: Walletuistore // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/wallet-ui-get", //path: url 주소
            component: Walletuiget // component: url주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/todo",
            component: Todo,
            children: [
                {
                    path: "/todo/schedule",
                    component: Todo,
                    name: 'schedule'
                },
                {
                    path: "/todo/working",
                    component: Todo,
                    name: 'working'

                },
                {
                    path: "/todo/finish",
                    component: Todo,
                    name: 'finish'
                }
            ]
        },
        {
            path: "/verifier",
            component: Verifier
        },
        {
          path: "/verifier-inschool",
          component: Verifierinschool
        },
    ]
});
