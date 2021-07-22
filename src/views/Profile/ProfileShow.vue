<template>
  <div v-if="user.id"
  class="flex justify-center w-full">
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
<script language="ts">
import {ref,onMounted} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router";
import {User} from "@/models/User"
export default {
  name:"Profile",
  setup(){
    const store = useStore();
    const router = useRouter();
    const isEditMode = ref(false);
    const toggleIsEditMode =()=>{
      isEditMode.value = !isEditMode.value;
    }
    const user = ref(new User());
    onMounted(()=>{
      if(store.state.user?.id){
        user.value = store.state.user
      }else{
        router.push("/login");
      }
    })
    return{
      user,
      isEditMode,
      toggleIsEditMode
    }
  }
}
</script>