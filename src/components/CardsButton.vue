<template>
  <div class="flex justify-center">
    <button
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    v-if="phase==='answering'" @click="showAnswer">Answer</button>
    <button 
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    v-else-if="phase==='checking'"
    @click="nextQuestion">
      Next
    </button>
    <button 
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    v-else-if="phase==='finished'">
      Finished
    </button>
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