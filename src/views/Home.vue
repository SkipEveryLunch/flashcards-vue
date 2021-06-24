<template>
  <div class="h-1/2 flex flex-col justify-around">
    <div class="flex-col">
      <CardsText :phase="phase" 
      :front="questions[progress].front"
      :back="questions[progress].back"/>
    </div> 
    <div>
      <CardsButton :phase="phase"
      @show-answer="showAnswer"
      @next-question="nextQuestion"
      />
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import CardsButton from "@/components/CardsButton.vue"
import CardsText from '@/components/CardsText.vue';

export default defineComponent({
  name: 'Home',
  components:{
    CardsButton,
    CardsText
  },
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
        phase.value = "finished";
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
