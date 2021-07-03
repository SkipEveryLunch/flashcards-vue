<template>
<div v-if="!section">
  Loading...
</div>
<div v-else>
  <div class="m-3 p-2">
      <h1>{{section.name}}</h1>
  <div v-for="instruction in section.instructions"
  class="m-3 p-2"
    :key="instruction.id">
      <div>
        <p>
          {{instruction.header}}
        </p>
        <p>
          {{instruction.body}}
        </p>
        <button>Edit</button>
      </div>
    </div>
    <input v-model="newInstructionData.header" type="text">
    <input v-model="newInstructionData.body" type="text">
    <button @click="addInstruction">Add Instruction</button>
    <div v-for="question in section.questions"
    class="m-3 p-2"
    :key="question.id">
      <div>
        <p>
          {{question.front}}
        </p>
        <p>
          {{question.back}}
        </p>
        <button>Edit</button>
      </div>
    </div>
    <input v-model="newQuestionData.front" type="text">
    <input v-model="newQuestionData.back" type="text">
    <button @click="addQuestion">
    Add Question</button>
  </div>
</div>
</template>

<script lang="ts">
import {ref,onMounted,reactive} from "vue";
import {useRoute} from "vue-router";
import {Section} from "@/types";
import axios from "axios";
export default {
  name: 'SectionDetail',
  setup(){
    const route = useRoute();
    const {sectionId} = route.params;
    const section = ref<Section|null>(null);
    const newInstructionData = reactive({
      header: '',
      body: '',
    });
    const newQuestionData = reactive({
      front: '',
      back: '',
    })
    const addInstruction = async() =>{
      const {data} = await axios.post(
        "http://localhost:8000/api/instructions",
        {...newInstructionData,
        section_id:sectionId}
      )
      console.log(data);
      newInstructionData.header = "";
      newInstructionData.body = "";
      load();
    }
    const addQuestion = async() =>{
      const {data} = await axios.post(
        "http://localhost:8000/api/questions",
        {...newQuestionData,
        section_id:sectionId}
      )
      console.log(data);
      newQuestionData.front = "";
      newQuestionData.back = "";
      load();
    }
    const load = async()=>{
      const{data}= await axios.get(`http://localhost:8000/api/sections/${sectionId}`)
      section.value = data;
    }
    onMounted(async ()=>{
      load();
    })
    return{
      section,
      newInstructionData,
      newQuestionData,
      addInstruction,
      addQuestion
    }
  }
};
</script>
