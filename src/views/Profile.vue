<template>
  <div v-if="!isEditMode" class="flex flex-col">
    <div class="mb-3">
      <p>first name: {{user.first_name}}</p>
    </div>
    <div class="mb-3">
      <p>last name: {{user.last_name}}</p>
    </div>
    <div class="mb-3">
      <p>email: {{user.email}}</p>
    </div>
  </div>
  <div v-if="isEditMode" class="flex flex-col">
    <div class="w-full md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          First Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model="newUserForm.first_name">
      </div>
    </div>
    <div class="w-full md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Last Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model="newUserForm.last_name">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
          Email
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" v-model="newUserForm.email">
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
        @click="onUpdateInfo">
          Update Info
        </button>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" v-model="newPasswordForm.password">
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Password Confirm
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" v-model="newPasswordForm.password_confirm">
          </div>
        </div>
        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
        @click="onUpdatePassword">
          Update Password
        </button>
      </div>
    </div>
  </div>
  <button @click="toggleIsEditMode">Edit</button>
</template>
<script>
import {ref,reactive,computed,watch} from "vue"
import {useStore} from "vuex"
import axios from "axios";
export default {
  name:"Profile",
  setup(){
    const store = useStore();
    const isEditMode = ref(false);
    const toggleIsEditMode =()=>{
      isEditMode.value = !isEditMode.value;
    }
    const user = computed(()=>{
      return store.state.user
    })
    const newUserForm = reactive({
      first_name:"",
      last_name:"",
      email:"",
    })
    watch(user,()=>{
      newUserForm.first_name = user.value.first_name;
      newUserForm.last_name = user.value.last_name;
      newUserForm.email = user.value.email;
    });
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
      user,
      isEditMode,
      toggleIsEditMode,
      newUserForm,
      newPasswordForm,
      onUpdateInfo,
      onUpdatePassword,
    }
  }
}
</script>
<style>
  
</style>