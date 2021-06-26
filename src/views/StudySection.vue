<template>
  <div class="h-1/2 flex flex-col justify-around">
    <div class="flex-col">
      <CardsText :phase="phase" 
      :front="questions[progress]?.front"
      :back="questions[progress]?.back"/>
    </div> 
    <div>
      <CardsButton :phase="phase"
      @show-answer="showAnswer"
      @next-question="nextQuestion"
      />
    </div> 
    <Modal v-if="isModalOn"
    @modal-off="modalOff"
    :modalMessages="instructions"/>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,computed, onMounted } from 'vue';
import CardsButton from "@/components/CardsButton.vue"
import CardsText from '@/components/CardsText.vue';
import Modal from '@/components/Modal.vue';
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {Section} from "@/types"

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
    const phase = ref("");
    const route = useRoute();
    const showAnswer =()=>{
      phase.value = "checking";
    }
    const nextQuestion =()=>{
      if(questions.length > progress.value + 1){
        phase.value = "answering";
        progress.value += 1;
      }else{
        phase.value = "finished";
      }
    }
    const section = computed<Section>(()=>{
      const chosenSection = store.state.sections.find((el:Section)=>{
        return el.id === route.params.sectionId
      })
      console.log(chosenSection)
      return chosenSection;
    });
    const questions = section.value.questions;
    const instructions = section.value.instructions;
    const isModalOn = ref(true);
    const modalOff =()=>{
      isModalOn.value = false;
    }
    onMounted(()=>{
      if(questions.length > 0){
        phase.value = "answering"
      }else{
        phase.value = "finished"
      }
      
    })
    return{
      progress,
      questions,
      instructions,
      phase,
      showAnswer,
      nextQuestion,
      isModalOn,
      modalOff
    }
  }
});
</script>
