<template>
    <div id="note-editor">
        <div class="form-group">
            <input type="text" name="title"
                   class="title form-control"
                   placeholder="请输入标题"
                   @input="updateNote()"
                   :disabled="!filteredNotes.length"
                   v-model="activeNote.title">
            <textarea placeholder="请输入正文"
                      v-model="activeNote.content"
                      name="content"
                      class="form-control"
                      :disabled="!filteredNotes.length"
                      @input="updateNote()"></textarea>
        </div>
    </div>
</template>

<script>
    import { mapState,mapGetters,mapMutations } from 'vuex'

    export default {
        name: "Editor",
        computed:{
            ...mapState([
                'activeNote'
            ]),
            ...mapGetters([
                'filteredNotes'
            ])
        },
        methods:{
            ...mapMutations([
                'editNote'
            ]),
            updateNote() {
                this.editNote(this.activeNote);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #note-editor{
        height: 100%;
        margin-left: 380px;

        .form-group{
            height: 50%;
        }

        .title{
            border:0;
        }

        textarea{
            height: 100%;
            border: 0;
            border-radius: 0;
            padding-top: 15px;
        }
    }
</style>