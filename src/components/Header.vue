  
<template>
  <header class="text-center bg-blue-800 text-white p-4 mb-10">
    <div class="text-2xl md:text-3xl font-bold mb-3">
      <i class="far fa-lightbulb"></i> 
      {{appTitle}}
    </div>

    <p>
      made by
      <a class="text-blue-300" href="https://google.com" target="_blank"
      >SkipEveryLunch</a
      >
    </p>
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