<template>
  <div id="app" class="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    import Toolbar from '@/components/Toolbar.vue'
    import NotesList from '@/components/NotesList.vue'
    import Editor from '@/components/Editor.vue'
    export default {
        name: 'home',
        components: {
            Toolbar,
            NotesList,
            Editor
        },
        computed:{
            ...mapState([
                'activeNote',
                'notes'
            ])
        },
        watch:{
            activeNote: function(val, oldVal){
                if(Object.keys(oldVal).length !== 0){
                    if(oldVal.title.trim().substring(0,30).length===0){
                        for (var i = 0; i < this.notes.length; i++){
                            if(this.notes[i].id === oldVal.id){
                                this.notes.splice(i,1);
                                break;
                            }
                        }
                    }
                }

            }
        },
        methods: {
            ...mapActions([
                'initStore'
            ])
        },
        mounted(){
            this.initStore();
        }
    }
</script>

<style>
  html,#app{
    height: 100%;
  }

  body{
    margin: 0;
    padding: 0;
    border: 0;
    height:100%;
    max-height: 100%;
    position: relative;
  }
</style>
