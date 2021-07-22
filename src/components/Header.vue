  
<template>
  <nav class="flex justify-between px-3 bg-blue-600 xl:px-5">
    <div class="navContent">
      <router-link to="/">
        <i class="mr-2 far fa-lightbulb"></i> 
        <span>{{appTitle}}</span>
      </router-link>
    </div>
    <div v-if="user.id" class="flex">
      <div class="relative navContent">
        <div class="flex items-center"
        @click="toggleIsDropDownShown"
        @blur="toggleIsDropDownShown">
        <span class="mr-2 cursor-pointer">
                {{name}}
        </span>
        <span class="mt-1 ml-1 text-sm" v-if="!isDropDownShown">
          ▼
        </span>
        <span class="mt-1 ml-1 text-sm" 
        v-else>
          ▲
        </span>
        </div>
        <ProfileDropDown v-if="isDropDownShown"
        @logout="logout"/>
      </div>
    </div>
    <div v-else class="flex">
      <div class="navContent">
        <router-link  to="/login">
        Login
        </router-link>
      </div>
      <div class="navContent">
        <router-link  to="/register">
        Signin
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
import {computed,ref,watch} from "vue";
import {useStore} from "vuex";
import ProfileDropDown from "./ProfileDropDown.vue";
export default {
  name:"Header",
  components:{ProfileDropDown},
  setup(){
    const appTitle = "Flash Cards";
    const name = ref("");
    const store = useStore();
    const user = computed(()=>{
      return store.state.user;
    });
    const isDropDownShown = ref(false);
    const toggleIsDropDownShown = ()=>{
      isDropDownShown.value=!isDropDownShown.value;
    }
    const logout = async ()=>{
      const {data} = await axios.delete("http://localhost:8000/api/logout",{ withCredentials: true });
      store.dispatch("setUser",data);
    }
    watch(user,()=>{
      name.value = `${user.value.first_name} ${user.value.last_name}`;
    });
    return {
      appTitle,user,name,logout,
      toggleIsDropDownShown,isDropDownShown
    };
  }
}
</script>
<style>
  .navContent{
    @apply px-2 py-5 xl:px-4 xl:text-2xl xl:py-7 text-white
  }
</style>