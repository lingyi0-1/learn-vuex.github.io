import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      notes: [],
      activeNote: {},
      show: ''
  },
  getters: {
      filteredNotes: (state) => {
          if(state.show === 'all'){
              return state.notes || {};
          }else{
              return state.notes.filter(note => note.favorite) || {};
          }
      }
  },
  mutations: {
      initStore(state, data){
          state.notes = data.notes;
          state.show = data.show;
          state.activeNote = data.activeNote;
      },
      newNote(state){
          state.show = 'all';
          var newNote = {
              id: +new Date(),
              title: '',
              content: '',
              favorite: false
          };
          state.notes.push(newNote);
          state.activeNote = newNote;
      },
      editNote(state, note) {
          state.activeNote = note;
          for (var i = 0; i < state.notes.length; i++){
              if(state.notes[i].id === note.id){
                  state.notes[i] = note;
                  break;
              }
          }
      },
      deleteNote(state, filteredNotes) {
          for (var i = 0; i < state.notes.length; i++){
              if(state.notes[i].id === state.activeNote.id){
                  state.notes.splice(i,1);
                  break;
              }
          }
          state.activeNote = filteredNotes[0] || {};
      },
      toggleFavorite(state) {
          state.activeNote.favorite = !state.activeNote.favorite;
      },
      updateShow(state,show){
          state.show = show;
          if(show === 'favorite'){
              state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
          }else{
              state.activeNote = state.notes[0] || {};
          }
      },
      updateActiveNote(state, note){
          state.activeNote = note;
      }


  },
  actions: {
      initStore (context) {
          const initNote = {
              id: +new Date(),
              title: '我的笔记',
              content: '第一篇笔记内容',
              favorite: false
          };
          const initData = {
              show: 'all',
              notes: [initNote],
              activeNote: initNote
          };
          context.commit('initStore',initData)
      }
  }
})
