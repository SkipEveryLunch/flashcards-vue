<template lang="">
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
export default {
  name:"Profile",
  props:["user"]
}
</script>