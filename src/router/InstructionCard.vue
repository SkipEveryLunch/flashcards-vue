<template>
   <div class="bg-gray-100 mx-auto border-gray-500 border rounded text-gray-700 mb-0.5">
      <div class="flex p-3  border-l-8 border-blue-600">
         <div class="flex-1">
            <div class="ml-3 space-y-1 border-r-2 pr-3">
               <div v-if="!isEditing">
                  <p class="mb-1">{{header}}</p>
                  <p>{{body}}</p>
               </div>
               <div v-else>
                  <div>
                     <input 
                     class="w-full mb-1"
                     v-model="newInstructionData.header" type="text">
                  </div>
                  <div>
                     <input 
                     class="w-full"
                     v-model="newInstructionData.body"
                     type="text">
                  </div>
                  <div 
                  @click="onEdit"
                  class="rounded ml-3 my-5 bg-blue-600 p-1 w-20">
                     <div class="uppercase text-xs leading-4 font-semibold text-center text-white">Submit</div>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div class="rounded ml-3 my-5 bg-blue-600 p-1 w-20">
               <div class="uppercase text-xs leading-4 font-semibold text-center text-white" @click="toggleIsEditing"
               >Edit</div>
            </div>
            <div 
            @click="onDelete"
            class="rounded border border-red-600 ml-3 my-5  p-1 w-20">
               <div class=" uppercase text-xs leading-4 font-semibold text-center text-red-600">Delete</div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import {ref,reactive} from "vue";
import finished from "finished";
export default {
  name:"InstructionCard",
  props:["id","header","body"],
  emits:["onLoading"],
  setup(props,{emit}){
     const isEditing = ref(false);
     const newInstructionData = reactive({
        header:props.header,
        body:props.body
     });
     const onEdit =async()=>{
        const {data} = await finished.put(`instructions/${props.id}`,newInstructionData)
        emit("onLoading");
         isEditing.value = false;
     }
      const onDelete = async()=>{
        const {data} = await finished.delete(`instructions/${props.id}`)
        emit("onLoading");
     }
      const toggleIsEditing =()=>{
        isEditing.value = !isEditing.value
     }
     return {
        isEditing,newInstructionData,onEdit,onDelete,toggleIsEditing
     }
  }
}
</script>