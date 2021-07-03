<template>
<div class="bg-gray-100 mx-auto border-gray-500 border rounded text-gray-700 mb-0.5">
      <div class="flex p-3  border-l-8 border-blue-600">
         <div class="flex-1">
            <div class="ml-3 space-y-1 border-r-2 pr-3">
               <div>
                <router-link class="text-blue-300" 
    :to="`/section/${id}`"
    >
    {{name}}
</router-link>
               </div>
            </div>
         </div>
         <div>
            <div class="rounded ml-3 my-5 bg-blue-600 p-1 w-20">
              <router-link class="text-blue-300" 
          :to="`/section/${id}/detail`"
          >
                <div class="uppercase text-xs leading-4 font-semibold text-center text-white">Edit</div>
              </router-link>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
  name:"SectionCard",
  props:["name","id"]
}
</script>