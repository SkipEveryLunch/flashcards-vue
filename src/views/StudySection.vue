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
    <Modal v-if="isModalOn"
    @modal-off="modalOff"
    :modalMessages="modalMessages"/>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,computed } from 'vue';
import CardsButton from "@/components/CardsButton.vue"
import CardsText from '@/components/CardsText.vue';
import Modal from '@/components/Modal.vue';
import {useStore} from "vuex";

export default defineComponent({
  name: 'Home',
  components:{
    CardsButton,
    CardsText,
    Modal
  },
  setup(){
    const store = useStore();
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
    const questions = computed(()=>{
      return store.state.questions;
    });
    const modalMessages = computed(()=>{
      return store.state.modalMessages;
    });
    const isModalOn = ref(true);
    const modalOff =()=>{
      isModalOn.value = false;
    }
    return{
      progress,questions,phase,showAnswer,nextQuestion,modalMessages,isModalOn,
      modalOff
    }
  }
});
</script>
