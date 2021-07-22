<template>
   <div class="flex items-center justify-between px-10 border-2 rounded-md">
      <router-link class="w-full"
       :to="`/section/${id}`">
         <div class="py-5 ">
         {{name}}
         </div>
      </router-link>
      <router-link
      :to="`/section/${id}/detail`">
         <button class="btn btn-blue">
            編集
         </button>
      </router-link>
   </div>
</template>
<script>
export default {
  name:"SectionCard",
  props:["name","id"]
}
</script>