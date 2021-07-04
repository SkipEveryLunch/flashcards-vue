<template>
  <div class="h-screen">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import axios from "axios";
import {onMounted} from "vue";
import {useStore} from "vuex";
export default {
  name:"Wrapper",
  components:{
    Header
  },
  setup(){
    const store = useStore();
    onMounted(async()=>{
      const {data} = await axios.get("http://localhost:8000/api/user",{ withCredentials: true });
      store.dispatch("setUser",data);
    })
  }
}
</script>