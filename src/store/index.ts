import { createStore } from 'vuex'

export default createStore({
  state: {
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
    ] as Question[],
    modalMessages:[
      {
        header:"this is paragraph one",
        body:"れれおらんのさららおりすらさ、さしるるるせろよるじろ、ごるる。れべっけせせじゅらぽっるっか、ぽれんのぺぺろっそ、ばろ"
      },
      {
        header:"this is paragraph two",
        body:"れれおらんのさららおりすらさ、さしるるるせろよるじろ、ごるる。れべっけせせじゅらぽっるっか、ぽれんのぺぺろっそ、ばろ"
      },    {
        header:"this is paragraph three",
        body:"れれおらんのさららおりすらさ、さしるるるせろよるじろ、ごるる。れべっけせせじゅらぽっるっか、ぽれんのぺぺろっそ、ばろ"
      }
    ] as ModalMessage[]
  },
  mutations: {
    addQuestion(state:State, 
      payload:Question){
      // stateへ
      state.questions = [...state.questions,payload]
    },
    addModalMessage(state:State, payload:ModalMessage){
      // stateへ
      state.modalMessages = [...state.modalMessages,payload]
    }
  },
  actions: {
    addQuestion(store, payload:Question){
      // Mutationsへ
      store.commit('addQuestion', payload)
    },
    addModalMessage(store, payload:ModalMessage){
      // Mutationsへ
      store.commit('addModalMessage', payload)
    }
  }
})

type Question = {
  front:string,
  back:string
}
type ModalMessage = {
  header:string,
  body:string
}
interface State{
  questions:Question[];
  modalMessages:ModalMessage[];
}