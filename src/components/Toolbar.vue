<template>
    <div id="toolbar">
        <span class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30"></span>
        <span @click="newNote()" class="glyphicon glyphicon-plus"></span>
        <span @click="toggleFavorite()" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></span>
        <span @click="deleteNote(filteredNotes)" class="glyphicon glyphicon-remove"></span>
    </div>

</template>

<script>
    import { mapState,mapGetters,mapMutations } from 'vuex'
    export default {
        name: "Toolbar",
        computed:{
            ...mapState([
                'activeNote'
            ]),
            ...mapGetters([
                'filteredNotes'
            ])
        },
        methods: {
            ...mapMutations([
                'newNote',
                'toggleFavorite',
                'deleteNote'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    #toolbar{
        float:left;
        width:80px;
        height:100%;
        background-color: #30414D;
        color: #767676;
        padding: 35px 25px 25px 25px;
    }

    .starred{
        color: #F7AE4F;
    }

    span{
        font-size:30px;
        margin-bottom: 35px;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.5s ease;

        &:hover{
            opacity: 1;
        }
    }

</style>