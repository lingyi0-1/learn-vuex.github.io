<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>Notes|heavenru.com</h2>
            <div class="btn-group btn-group-justified" role="group">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="updateShow('all')" :class="{active: show === 'all'}">全部笔记</button>
                </div>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="updateShow('favorite')" :class="{active: show === 'favorite'}">收藏的笔记</button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="list-group">
                <a class="list-group-item"
                   href="#"
                   :class="{ active: activeNote === note }"
                   v-for="note in filteredNotes"
                   @click="updateActiveNote(note)"
                    >
                    <h4 class="list-group-item-heading">
                        {{note.title.trim().substring(0,30)}}
                    </h4>

                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default {
        name: "NoteList",
        computed:{
            ...mapState([
                'show',
                'activeNote'
            ]),
            ...mapGetters([
                'filteredNotes'
            ])
        },
        methods:{
            ...mapMutations([
                'updateShow',
                'updateActiveNote'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    #notes-list{
        float: left;
        width: 300px;
        height: 100%;
        background-color: #F5F5F5;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;

        #list-header{
            padding: 5px 25px 25px 25px;

            h2{
                font-weight: 300;
                text-transform: uppercase;
                text-align: center;
                font-size: 22px;
                padding-bottom: 8px;
            }

            .search{
                margin-top: 20px;
            }
        }

        .container{
            height: calc(100% - 204px);
            max-height: calc(100% - 204px);
            overflow: auto;
            width: 100%;
            padding: 0;

            .list-group-item{
                border: 0;
                border-radius: 0;
            }

            .list-group-item-heading{
                font-weight: 300;
                font-size: 15px;
            }
        }
    }

</style>