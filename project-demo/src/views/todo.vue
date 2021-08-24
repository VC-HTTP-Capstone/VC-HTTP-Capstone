<template>
  <div class="parent1">
    <div class="child_side1"></div>
    <div class="center parent child_center1">
      <br>
      <span class="btn-group btn-group" role="group" aria-label="Basic example">
        <router-link to="/todo/schedule">
          <span v-if="status === 1"><button type="button" class="btn btn-primary">작업 예정</button></span>
          <span v-else><button type="button" class="btn btn-secondary" @click="changestatus(1)">작업 예정</button></span>
        </router-link>
        <router-link to="/todo/working">
          <span v-if="status === 2"><button type="button" class="btn btn-primary">진행 중</button></span>
          <span v-else><button type="button" class="btn btn-secondary" @click="changestatus(2)">진행 중</button></span>
        </router-link>
        <router-link to="/todo/finish">
          <span v-if="status === 3"><button type="button" class="btn btn-primary">작업 종료</button></span>
          <span v-else><button type="button" class="btn btn-secondary" @click="changestatus(3)">작업 종료</button></span>
        </router-link>
        </span>
          <button type="button" class="btn btn-success btn ml-2" @click="showInputModal">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>&nbsp;추가하기
          </button>
          <button type="button" class="btn btn-danger btn" @click="clearAll">
            <i class="fa fa-minus-circle" aria-hidden="true"></i>&nbsp;모두 삭제하기
          </button>

          <modal v-if="showModal" @close="showModal = false" v-on:addTodo="addTodo">
            <h3 slot="header">할 일 추가</h3>

            <span slot="footer" @click="showModal = false">
              나가기
              <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
            </span>
          </modal>
      <hr style="border-width: 10px;">
      <span v-if="this.$route.name==='schedule'"><schedule v-bind:propsdata="todoItems"
        @removeTodo="removeTodo" @moveToWorking="moveToWorking"></schedule></span>

        <span v-if="this.$route.name==='working'"><working v-bind:propsdata="ingItems"
          @removeWorking="removeWorking" @moveToFinish="moveToFinish"></working></span>

          <span v-if="this.$route.name==='finish'"><finish v-bind:propsdata="finishItems"
            @removeFinish="removeFinish"></finish></span>
    </div>
    <div class="child_side1"></div>
  </div>
</template>

<script>
import Modal from '../components/common/inputmodal.vue'
import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main.vue";
import Todo from "../views/todo.vue";
import Schedule from "../views/schedule.vue";
import Working from "../views/working.vue";
import Finish from "../views/finish.vue";

export default {
  data() {
    return {
      status: 0,
      todoItems: [],
      ingItems: [],
      finishItems: [],
      showModal: false,
      newTodoItem: ''
    }
  },
  created() {
    if(localStorage.length > 0) {
      for(var i = 0 ; i < localStorage.length; i++) {
        if(localStorage.getItem(localStorage.key(i)) == "예정") {
          this.todoItems.push(localStorage.key(i));
        }
        else if(localStorage.getItem(localStorage.key(i)) == "진행") {
          this.ingItems.push(localStorage.key(i));
        }
        else if(localStorage.getItem(localStorage.key(i)) == "종료") {
          this.finishItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    changestatus(status) {
      this.status = status;
    },
    addTodo(todoItem) {
      localStorage.setItem(todoItem, "예정");
      this.todoItems.push(todoItem);
    },
    clearAll() {
      if(this.status == 1) {
        for(var i = 0 ; i < localStorage.length ; i++) {
          if(localStorage.getItem(localStorage.key(i)) == "예정") {
            localStorage.removeItem(localStorage.key(i));
          }
        }
        this.todoItems = [];
      }
      if(this.status == 2) {
        for(var i = 0 ; i < localStorage.length ; i++) {
          if(localStorage.getItem(localStorage.key(i)) == "진행") {
            localStorage.removeItem(localStorage.key(i));
          }
        }
        this.ingItems = [];
      }
      if(this.status == 3) {
        for(var i = 0 ; i < localStorage.length ; i++) {
          if(localStorage.getItem(localStorage.key(i)) == "예정") {
            localStorage.removeItem(localStorage.key(i));
          }
        }
        this.finishItems = [];
      }
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    removeWorking(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.ingItems.splice(index, 1);
    },
    removeFinish(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.finishItems.splice(index, 1);
    },
    showInputModal() {
      this.showModal = !this.showModal;
    },
    moveToWorking(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
      localStorage.setItem(todoItem, "진행");
      this.ingItems.push(todoItem);
      console.log("work complete");
    },
    moveToFinish(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.ingItems.splice(index, 1);
      localStorage.setItem(todoItem, "종료");
      this.finishItems.push(todoItem);
    }
  },
  components: {
    Modal: Modal,
    Schedule: Schedule,
    Working: Working,
    Finish: Finish
  }
}
</script>

<style scoped>
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
</style>
