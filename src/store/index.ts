import { createStore } from 'vuex';
import {User} from "@/models/User";
import { Commit } from 'vuex';

interface State{
  user:User
}

export default createStore({
  state: {
    user: new User()
  },
  mutations: {
    SET_USER:(state:State,user:User)=>{
      state.user = user;
    },
    DISCARD_USER:(state:State)=>{
      state.user = new User();
    },
  },
  actions: {
    setUser:({commit}:{commit:Commit},user:User)=>{
      commit("SET_USER",user);
    },
    discardUser:({commit}:{commit:Commit})=>{
      commit("DISCARD_USER");
    }
  }
})
