<template>
  <ProfileView :user="user" v-if="!isEditMode"/>
  <ProfileEdit  :user="user" v-else/>
  <button class="btn btn-blue"
  @click="toggleIsEditMode">
    編集する
  </button>
</template>
<script>
import {ref,computed} from "vue"
import {useStore} from "vuex"
import ProfileView from "@/components/ProfileView.vue"
import ProfileEdit from "@/components/ProfileEdit.vue"
export default {
  name:"Profile",
  components:{
    ProfileView,
    ProfileEdit
  },
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
<style>
  
</style>