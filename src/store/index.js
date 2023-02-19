import { createStore } from 'vuex'

const store = createStore({
  state(){
    return{
      categories: [],
      tasks: [],
      currentCat: '',
    }
  },
  mutations: {
    addcategory(state, payload){
        state.categories.push(payload);
    },
    AddTask(state, payload){
      state.tasks.push(payload);
    },
    removeTask(state, payload){
      state.tasks = state.tasks.filter(t => t.id != payload.id);
    },
    removeCat(state, payload){
      state.categories = state.categories.filter(c => c.id != payload.id);
    }
  }
})

export default store;