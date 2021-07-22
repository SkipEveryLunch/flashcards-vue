<template>
   <div class="bg-gray-100 mx-auto border-gray-500 border rounded text-gray-700 mb-0.5">
      <div class="flex p-3 border-l-8 border-blue-600">
         <div class="flex-1">
            <div class="pr-3 ml-3 space-y-1 border-r-2">
               <div v-if="!isEditing">
                  <p class="mb-1">{{front}}</p>
                  <p>{{back}}</p>
               </div>
               <div v-else>
                  <div>
                     <input 
                     class="w-full mb-1"
                     v-model="newQuestionData.front" type="text">
                  </div>
                  <div>
                     <input 
                     class="w-full"
                     v-model="newQuestionData.back"
                     type="text">
                  </div>
                  <div 
                  @click="onEdit"
                  class="w-20 p-1 my-5 ml-3 bg-blue-600 rounded">
                     <div class="text-xs font-semibold leading-4 text-center text-white uppercase">Submit</div>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div class="w-20 p-1 my-5 ml-3 bg-blue-600 rounded">
               <div class="text-xs font-semibold leading-4 text-center text-white uppercase" @click="toggleIsEditing"
               >Edit</div>
            </div>
            <div 
            @click="onDelete"
            class="w-20 p-1 my-5 ml-3 border border-red-600 rounded">
               <div class="text-xs font-semibold leading-4 text-center text-red-600 uppercase ">Delete</div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import {ref,reactive} from "vue";
import axios from "axios";
export default {
  name:"QuestionCard",
  props:["id","front","back"],
  emits:["onLoading"],
  setup(props,{emit}){
     const isEditing = ref(false);
     const newQuestionData = reactive({
        front:props.front,
        back:props.back
     });
     const onEdit =async()=>{
        const {data} = await axios.put(`questions/${props.id}`,newQuestionData)
        emit("onLoading");
         isEditing.value = false;
     }
      const onDelete = async()=>{
        const {data} = await axios.delete(`questions/${props.id}`)
        emit("onLoading");
     }
      const toggleIsEditing =()=>{
        isEditing.value = !isEditing.value
     }
     return {
        isEditing,newQuestionData,onEdit,onDelete,toggleIsEditing
     }
  }
}
</script>