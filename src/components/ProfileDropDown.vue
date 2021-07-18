<template>
  <div class="absolute right-0 bg-white border border-gray-400 rounded shadow-sm top-full w-max">
    <ul>
      <ul class="profileList">
        <router-link to="/profile">
          プロフィールを見る
        </router-link>
      </ul>
      <ul class="profileList">プロフィールを編集する</ul>
      <ul class="profileList" @click="onLogout">ログアウトする</ul>
    </ul>
  </div>
</template>
<script>
export default {
  name:"ProfileDropDown",
  emits:["logout"],
  setup(props,{emit}){
    const onLogout =()=>{
      emit("logout")
    }
    return{
      onLogout
    }
  }
}
</script>
<style scoped>
  .profileList{
    @apply border-b pl-2 mr-4 py-2 text-gray-800
    text-lg hover:bg-gray-100 cursor-pointer
  }
</style>