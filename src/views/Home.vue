<template>
  <div>
    <div>
    {{questions[progress].front}}
    </div>
    <div v-if="isAnswerShown">
      {{questions[progress].back}}
    </div>
    <div v-if="!isAnswerShown">
      <button @click="showAnswer">Answer</button>
    </div>
    <div v-else>
      <button @click="nextQuestion">
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
