<template>
  <div class="max-w-xs">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="front">
          Front
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="front" type="text" 
        v-model="front"
        placeholder="write question here"/>
      </div>
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="back">
          Back
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="back" type="text" 
        v-model="back"
        placeholder="write an answer here"/>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
        @click="addQuestion">
          Add
        </button>
      </div>
    </div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="header">
          Header
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="header" type="text" 
        v-model="header"
        placeholder="write header here"/>
      </div>
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="body">
          Body
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" type="text" 
        v-model="body"
        placeholder="write an answer here"/>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
        @click="addModalMessage">
          Add
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
import {useStore} from "vuex";
export default {
  name:"EditSection",
  setup(){
    const store = useStore();
    const front = ref("");
    const back = ref("");
    const header = ref("");
    const body = ref("");
    const addQuestion = async() =>{
      await store.dispatch("addQuestion",{
        front:front.value,
        back:back.value
      })
      front.value = "";
      back.value = "";
    }
    const addModalMessage = async() =>{
      await store.dispatch("addModalMessage",{
        header:header.value,
        body:body.value
      })
      header.value = "";
      body.value = "";
    }
    return{
      front,back,header,body,addQuestion,addModalMessage
    }
  }
}
</script>
<style>
  
</style>