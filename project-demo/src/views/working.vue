<template>
  <div>
    <table class="table table-striped faded">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">할 일</th>
          <th scope="col">Finish</th>
          <th scope="col">Delete</th>
          <!-- <th scope="col">Finish</th> -->
        </tr>
      </thead>
      <!-- <transition-group name="tbody"> -->
      <transition-group name="tbody" tag="tbody">
        <tr v-for="(todoItem, index) in propsdata" :key="todoItem">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ todoItem }}</td>
            <td>
              <span class="removeBtn" type="button" @click="moveToFinish(todoItem, index)">
              <i class="fa fa-check" style="color: green" aria-hidden="true"></i>
              </span>
            </td>
            <td>
              <span class="removeBtn" type="button" @click="removeWorking(todoItem, index)">
              <i class="fa fa-trash-o" style="color: red" aria-hidden="true"></i>
              </span>
            </td>
            <!-- <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td> -->
        </tr>
        <!-- </span> -->
      </transition-group>
    </table>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeWorking(todoItem, index) {
      this.$emit('removeWorking', todoItem, index);
    },
    moveToFinish(todoItem, index) {
      this.$emit('moveToFinish', todoItem, index);
    }
  }
}
</script>

<style scoped>
.faded {
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
  table {
    width: 60%;
    height: 100px;
    margin: auto;
    text-align: center;
  }
  .tbody-item {
    display: inline-block;
    margin-right: 10px;
  }
  .tbody-move {
    transition: transform 1s;
  }
  .tbody-enter-active, .tbody-leave-active {
    transition: all 1s;
  }
  .tbody-enter, .tbody-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
