<template lang="">
  <div class="flex justify-center w-full">
    <form class="flex flex-col max-w-sm">
      <div class="formWrapper">
        <label class="whitespace-nowrap">
          苗字：
        </label>
        <input class="formInput" type="text" v-model="newUserForm.first_name">
      </div>
      <div class="formWrapper">
        <label class="whitespace-nowrap">
          名前：
        </label>
        <input class="formInput" type="text"
        v-model="newUserForm.last_name">
      </div>
      <div class="formWrapper">
        <label class="whitespace-nowrap">Email：</label>
        <input class="formInput" type="text"
        v-model="newUserForm.email">
      </div>
      <div class="flex justify-end mr-5">
        <button class="btn btn-blue"
        @click="onUpdateInfo">
          ユーザー情報編集
        </button>
      </div>
      <div class="formWrapper">
        <label class="whitespace-nowrap">
          パスワード：
        </label>
        <input class="formInput" type="password"
        v-model="newPasswordForm.password">
      </div>
      <div class="formWrapper">
        <label class="whitespace-nowrap">
          パスワード(再入力)：
        </label>
        <input class="formInput" type="password"
        v-model="newPasswordForm.password_confirm">
      </div>
      <div class="flex justify-end mr-5">
        <button class="btn btn-blue"
        @click="onUpdatePassword">
          パスワード編集
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import {reactive,watch} from "vue"
import axios from "axios";
export default {
  name:"Profile",
  props:["user"],
  setup(props){
    const newUserForm = reactive({
      first_name:props.user?.first_name,
      last_name:props.user?.last_name,
      email:props.user?.email,
    })
    const newPasswordForm = reactive({
      password:"",
      password_confirm:""
    })
    const onUpdateInfo =async()=>{
      const {status} = await axios.put(`http://localhost:8000/api/user/info`,newUserForm
      ,{ withCredentials: true });
      if(status===202){
          alert("updated")
        }else{
          alert("Something went wrong...")
        }
    }
    const onUpdatePassword =async()=>{
      if(newPasswordForm.password===newPasswordForm.password_confirm){
        const {status} = await axios.put(`http://localhost:8000/api/user/password`,{
        password:newPasswordForm.password
        },{ withCredentials: true });
        if(status===202){
          alert("updated")
        }else{
          alert("Something went wrong...")
        }
      }else{
        alert("invalid password")
      }
    }
    return{
      newUserForm,
      newPasswordForm,
      onUpdateInfo,
      onUpdatePassword,
    }
  }
}
</script>