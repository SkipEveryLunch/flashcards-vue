import { createStore } from 'vuex'
import {Section} from "@/types"

export default createStore({
  state: {
    sections:[
      {
        id:"1",
        name:"Test",
        status:"new",
        questions:[
          {
            front:"これは請求書です",
            back:"This is an invoice"
          },
          {
            front:"彼は部長です",
            back:"he is a director"
          },
          {
            front:"これは食器棚です",
            back:"this is a cupboard"
          }
      ],
      instructions:[
        {
          header:"this is paragraph one",
          body:"れれおらんのさららおりすらさ、さしるるるせろよるじろ、ごるる。れべっけせせじゅらぽっるっか、ぽれんのぺぺろっそ、ばろ"
        },
        {
          header:"this is paragraph two",
          body:"れれおらんのさららおりすらさ、さしるるるせろよるじろ、ごるる。れべっけせせじゅらぽっるっか、ぽれんのぺぺろっそ、ばろ"
        }, 
        {
          header:"this is paragraph three",
          body:"れれおらんのさららおりすらさ、さしるるるせろよるじろ、ごるる。れべっけせせじゅらぽっるっか、ぽれんのぺぺろっそ、ばろ"
        }]
    }]
  },
  mutations: {
    addSection(state, payload:Section){
      // stateへ
      state.sections = [...state.sections,payload]
    },
  },
  actions: {
    addSection(store, payload:Section){
      store.commit('addSection', payload)
    }
  }
})
