<template lang="">
  <div class="flex justify-center w-full">
    <form class="flex flex-col max-w-sm"
    @submit.prevent="onLogin">
      <div class="formWrapper">
        <label class="whitespace-nowrap">Email：</label>
        <input class="formInput" type="text"
        v-model="formData.email">
      </div>
      <div class="formWrapper">
        <label class="whitespace-nowrap">
          パスワード：
        </label>
        <input class="formInput" type="password"
        v-model="formData.password">
      </div>
      <div class="flex justify-end mr-5">
        <button class="btn btn-blue">
          ログイン
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import axios from "axios"
export default {
  name:"Register",
  setup(){
    const formData = reactive({
      email:"",
      password:"",
    })
    const router = useRouter();
    const store = useStore();
    const onLogin =async()=>{
      try{
        const res = await axios.post("login",formData);
        if(res.status===200){
          const {user} = res.data;
          console.log(res)
          store.dispatch("setUser",user);
          await router.push("/");
        }else{
          alert("Something went wrong...")
        }
      }catch(e){
        alert("Something went wrong...")
      }
    }
    return {
      formData,
      onLogin
    }
  }
}
</script>