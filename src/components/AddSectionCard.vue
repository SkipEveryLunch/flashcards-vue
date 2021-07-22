<template>
   <div class="flex items-center justify-between px-10 py-5">
      <input type="text" class="formInput"
      v-model="newSectionName">
      <div class="flex">
         <button class="mx-2 btn btn-blue " @click="createNewSection">
            追加
         </button>
         <button class="btn btn-red"
         @click="onDiscard">
            破棄
         </button>
      </div>
   </div>
</template>
<script>
import {ref} from "vue"
import {Section} from "@/types";
import axios from "axios"
export default {
  name:"AddSectionCard",
  emits:["on-dicard","reload"],
  setup(_props,{emit}){
      const newSectionName = ref("")
      const createNewSection =async()=>{
         const {status}= await axios.post("sections",{name:newSectionName.value})
         console.log(status)
         if(status===201){
            onDiscard()
            emit("reload")
         }else{
            alert("something goes wrong...")
         }
      }
      const onDiscard =()=>{
         emit("on-discard")
         newSectionName.value=""
      }
      return{
         newSectionName,
         createNewSection,
         onDiscard
      }
  }
}
</script>