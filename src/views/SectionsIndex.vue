<template>
  <div class="m-5">
    <ul>
      <li v-for="section in sections"
      :key="section.id">
        <SectionCard
        :name="section.name" :id="section.id"
        />
      </li>
    </ul>
  </div>
  <div class="m-5">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="newSection">
        新しいセクションを作る
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="newSection" type="text" v-model="newSectionName">
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
      @click="createNewSection">
        Create
      </button>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
import {ref,onMounted} from "vue";
import SectionCard from "@/components/SectionCard.vue";
import {Section} from "@/types";
import axios from "axios";
export default {
  name:"SectionsIndex",
  components:{SectionCard},
  setup(){
    const sections = ref<Section[]>([])
    const newSectionName = ref("")
    const createNewSection =()=>{
      const newSection = new Section(newSectionName.value)
      sections.value = [...sections.value,newSection]
    }
      onMounted(async()=>{
        const {data} = await axios.get("sections")
        sections.value = data;
      })
    return{
      sections,
      newSectionName,
      createNewSection,
    }
  }
}
</script>
<style>
  
</style>