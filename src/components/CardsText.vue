<template>
  <div v-if="phase!=='finished'">
    <div class="flex text-lg justify-center">
      <div>
    {{front}}
      </div>
    </div>
    <div v-if="phase==='checking'"
      class="flex text-lg justify-center">
      <div>
      {{back}}
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex text-lg justify-center">
      学習は終了しました
    </div>
    <div class="flex text-lg justify-center">
      Congratulations!
    </div>
  </div>
  
</template>
<script>
export default {
  name:"CardsText",
  props: ['phase','front','back']
}
</script>
<style>
  
</style>