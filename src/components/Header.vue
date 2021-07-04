  
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
        <router-link class="text-blue-300" to="/login"
        >Login</router-link
        >
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name:"Header",
  setup(){
    const appTitle = "Flash Cards App(temporary)";
    return {
      appTitle
    };
  }
}
</script>
<style>
  
</style>