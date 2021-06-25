<template lang="">
  <div class="absolute z-40 inset-0 opacity-40 bg-black"></div>
  <div class="absolute h-3/4 w-3/4 inset-0 m-auto bg-white z-50 rounded flex flex-col justify-between p-3">
    <div>
      <p
      v-if="progress < modalMessages.length"
      class="text-center"
      >{{modalMessages[progress].header}}</p>
    </div>
    <div>
      <p
      v-if="progress < modalMessages.length"
      class="text-center"
      >{{modalMessages[progress].body}}</p>
    </div>
    <div class="self-end">
      <button
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click="next">
      <span v-if="progress < modalMessages.length - 1">
        next
      </span>
      <span v-else>
        done
      </span>
      </button>
    </div>
  </div>
</template>
<script>
import {ref} from "vue"
export default {
  name:"Modal",
  props:["modalMessages"],
  emits:['modal-off'],
  setup(props,{emit}){
    const progress = ref(0);
    const next =()=>{
      if(progress.value < props.modalMessages.length - 1 ){
        progress.value += 1;
      }else{
        emit(`modal-off`);
      }
    }
    return{
      progress,next
    }
  }
}
</script>
<style lang="">
  
</style>