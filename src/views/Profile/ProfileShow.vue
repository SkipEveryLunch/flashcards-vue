<template>
  <div class="flex justify-center w-full">
    <form class="flex flex-col max-w-sm">
      <div class="formWrapper">
        <div class="whitespace-nowrap">
          苗字：{{user.first_name}}
        </div>
      </div>
      <div class="formWrapper">
        <div class="whitespace-nowrap">
          名前：{{user.last_name}}
        </div>
      </div>
      <div class="formWrapper">
        <div class="whitespace-nowrap">
          Email：{{user.email}}
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import {ref,computed} from "vue"
import {useStore} from "vuex"
export default {
  name:"Profile",
  setup(){
    const store = useStore();
    const isEditMode = ref(false);
    const toggleIsEditMode =()=>{
      isEditMode.value = !isEditMode.value;
    }
    const user = computed(()=>{
      return store.state.user
    })
    return{
      user,
      isEditMode,
      toggleIsEditMode
    }
  }
}
</script>