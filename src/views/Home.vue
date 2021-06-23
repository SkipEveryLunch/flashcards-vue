<template>
  <div class="flex-col justify-between">
    <div class="flex-col">
      <div class="flex justify-center">
        <div>
      {{questions[progress].front}}
        </div>
      </div>
      <div v-if="phase==='checking'"
       class="flex justify-center">
        <div>
        {{questions[progress].back}}
        </div>
      </div>
    </div>
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
        v-else-if="phase==='done'">
          Done
        </button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
    const progress = ref(0);
    const phase = ref("answering");
    const showAnswer =()=>{
      phase.value = "checking";
    }
    const nextQuestion =()=>{
      if(questions.value.length > progress.value + 1){
        phase.value = "answering";
        progress.value += 1;
      }else{
        phase.value = "done";
      }
    }
    const questions = ref([
      {
        front:"これは請求書です",
        back:"This is an invoice"
      },
      {
        front:"彼は部長です",
        back:"he is a director"
      },
      {
        front:"これは食器棚です",
        back:"this is a cupboard"
      }
    ])
    return{
      progress,questions,phase,showAnswer,nextQuestion
    }
  }
});
</script>
