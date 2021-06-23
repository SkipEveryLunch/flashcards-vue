<template>
  <div class="flex-col justify-between">
    <div class="flex-col">
      <div class="flex justify-center">
        <div>
      {{questions[progress].front}}
        </div>
      </div>
      <div v-if="isAnswerShown"
       class="flex justify-center">
        <div>
        {{questions[progress].back}}
        </div>
      </div>
    </div>
    <div class="flex justify-center">
        <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        v-if="!isAnswerShown" @click="showAnswer">Answer</button>
        <button 
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        v-else @click="nextQuestion">
          <span v-if="questions.length > progress + 1">
          Next
          </span>
          <span v-else>
            Done
          </span>
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
    const isAnswerShown = ref(false);
    const showAnswer =()=>{
      isAnswerShown.value = true;
    }
    const nextQuestion =()=>{
      if(questions.value.length > progress.value + 1){
        isAnswerShown.value = false;
        progress.value += 1;
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
      progress,questions,isAnswerShown,showAnswer,nextQuestion
    }
  }
});
</script>
