<template>
  <div v-if="!section">
    Loading...
  </div>
  <div v-else>
    <div class="h-1/2 flex flex-col justify-around">
      <div class="flex-col">
        <CardsText :phase="phase" 
        :front="section.questions[progress]?.front"
        :back="section.questions[progress]?.back"/>
      </div> 
      <div>
        <CardsButton :phase="phase"
        @show-answer="showAnswer"
        @next-question="nextQuestion"
        />
      </div> 
      <Modal v-if="isModalOn"
      @modal-off="modalOff"
      :modalMessages="section.instructions"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ref,onMounted } from 'vue';
import CardsButton from "@/components/CardsButton.vue"
import CardsText from '@/components/CardsText.vue';
import Modal from '@/components/Modal.vue';
import {useRoute} from "vue-router";
import {Section} from "@/types"
import axios from "axios";

export default {
  name: 'StudySection',
  components:{
    CardsButton,
    CardsText,
    Modal
  },
  setup(){
    const progress = ref(0);
    const phase = ref("answering");
    const route = useRoute();
    const showAnswer =()=>{
      phase.value = "checking";
    }
    const nextQuestion =()=>{
      if(section.value){
        if(section.value.questions.length > (progress.value + 1)){
                phase.value = "answering";
                progress.value += 1;
              }else{
                phase.value = "finished";
              }
        }
        
      }
    const section = ref<Section|null>(null);
    onMounted(async ()=>{
      const{data}= await axios.get(`http://localhost:8000/api/sections/${route.params.sectionId}`)
      section.value = data;
    })
    const questions = section.value?.questions??[];
    const instructions = section.value?.instructions??[];
    const isModalOn = ref(true);
    const modalOff =()=>{
      isModalOn.value = false;
    }
    return{
      section,
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
};
</script>
