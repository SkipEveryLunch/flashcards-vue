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
    <button>Add Instruction</button>
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
    <button>Add Question</button>
  </div>
</div>
</template>

<script lang="ts">
import {ref,onMounted} from "vue";
import {useRoute} from "vue-router";
import {Section} from "@/types";
import axios from "axios";
export default {
  name: 'SectionDetail',
  setup(){
    const route = useRoute();
    const section = ref<Section|null>(null);
    onMounted(async ()=>{
      const{data}= await axios.get(`http://localhost:8000/api/sections/${route.params.sectionId}`)
      section.value = data;
    })
    return{
      section
    }
  }
};
</script>
