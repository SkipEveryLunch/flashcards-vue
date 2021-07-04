  
<template>
  <header class="text-center bg-blue-800 text-white p-4 mb-10">
    <div class="text-2xl md:text-3xl font-bold mb-3">
      <i class="far fa-lightbulb"></i> 
      {{appTitle}}
    </div>
    <div class="flex justify-around">
      <div>
        <router-link class="text-blue-300" to="/"
        >Index</router-link
        >
      </div>
      <div>
        <router-link class="text-blue-300" to="/register"
        >Register</router-link
        >
      </div>
      <div>
        <span v-if="user.id">
          Logout
        </span>
        <router-link class="text-blue-300" to="/login"
        v-else
        >Login</router-link
        >
      </div>
      <div v-if="user.id !== null">
        <router-link class="text-blue-300" to="/login"
        >{{name}}</router-link
        >
      </div>
    </div>
  </header>
</template>
<script>
import axios from "axios";
import {computed,ref,watch} from "vue";
import {useStore} from "vuex";
export default {
  name:"Header",
  setup(){
    const appTitle = "Flash Cards App(temporary)";
    const name = ref("");
    const store = useStore();
    const user = computed(()=>{
      return store.state.user;
    });
    watch(user,()=>{
      name.value = `${user.value.first_name} ${user.value.last_name}`;
    });
    return {
      appTitle,user,name
    };
  }
}
</script>
<style>
  
</style>