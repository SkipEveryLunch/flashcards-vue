<template>
  <div class="btnbox-bottom">
    <button
    class="btn btn-blue"
    v-if="phase==='answering'" @click="showAnswer">Answer</button>
    <button 
    class="btn btn-blue"
    v-else-if="phase==='checking'"
    @click="nextQuestion">
      Next
    </button>
    <router-link to="/"
    v-else-if="phase==='finished'">
    <button class="btn">
      Finished
    </button>
    </router-link>
  </div>
</template>
<script>
export default {
  name:"CardsButton",
  props:["phase"],
  emits:["show-answer","next-question"],
  setup(_props,{emit}){
    const showAnswer =()=>{
      emit("show-answer")
    }
    const nextQuestion =()=>{
      emit("next-question")
    }
    return{
      showAnswer,nextQuestion
    }
  }
}
</script>