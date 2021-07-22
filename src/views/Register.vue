<template lang="">
  <div class="flex justify-center w-full">
    <form class="flex flex-col max-w-sm"
    @submit.prevent="onRegister">
      <div class="formWrapper">
        <label class="whitespace-nowrap">
          苗字：
        </label>
        <input class="formInput" type="text" v-model="formData.first_name">
      </div>
      <div class="formWrapper">
        <label class="whitespace-nowrap">
          名前：
        </label>
        <input class="formInput" type="text"
        v-model="formData.last_name">
      </div>
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
      <div class="formWrapper">
        <label class="whitespace-nowrap">
          パスワード(再入力)：
        </label>
        <input class="formInput" type="password"
        v-model="formData.password_confirm">
      </div>
      <div class="flex justify-end mr-5">
        <button class="btn btn-blue">
          登録
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import axios from "axios"
export default {
  name:"Register",
  setup(){
    const formData = reactive({
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      password_confirm:"",
    })
    const router = useRouter();
    const onRegister =async()=>{
      const {status} = await axios.post(`register`,formData);
      console.log(status)
      if(status===201){
          await router.push("/login");
        }else{
          alert("Something went wrong...")
        }
    }
    return {
      formData,
      onRegister
    }
  }
}
</script>