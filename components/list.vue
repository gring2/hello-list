<template>
<div class="list_section">
    <ul class="stack">
        <li v-for="n , i in test">
            <div class="schedule-div"  @dragover="over" @drop="drop" @dragstart="drag" v-bind:id="i" draggable="true">
                <p >
                    {{n}} {{i}}
                </p>
            </div>
        </li>
    </ul>
</div>
</template>
<style scoped>
    @import "../assets/.dist/list.css";

</style>
<script>
    import { mapMutations, mapGetters, mapState } from 'vuex'

    export default {
        props: {
            origin: {
                type: Array
            },
            title: {
                type: String
            }

        },

        data () {
            return {
            }
        },
        computed:{
            test() {
                let key_value = this.title
                return this.$store.state.list.test[key_value]
            },
            dragSrc_() {
                return this.$store.state.list.dragSrc_
            },
            dragClone_() {
                return this.$store.state.list.dragClone_
            }
        },
//        computed: mapGetters({
//            test: 'list/test',
//            dragSrc_: 'list/dragSrc_',
//            dragClone_: 'list/dragClone_'
//        }),
        methods : {
            drag (ev) {
                this.$store.commit('list/drag', ev)
//                ev.dataTransfer.setData("text/plain", ev.target.id);
//                this.dragSrc_ = ev.target
//                this.dragClone_ = ev.target.cloneNode(true)//.parentElement
//
//                ev.target.innerHTML = "";
//                ev.target.style.backgroundColor = "#026AA7";
            },
            over (ev){
                this.$store.commit('list/over', ev)

//                ev.preventDefault();
                // dropEffect를 move로 설정.
//                ev.dataTransfer.dropEffect = "move"

            },
            drop (ev) {
//                ev.preventDefault();
                this.$store.commit('list/drop', ev)
                console.dir(this.$store.state.list.test)
                // 대상의 id를 가져와 대상 DOM에 움직인 요소를 추가합니다.
//                var data = ev.dataTransfer.getData("text");
//                var tmp = this.dragClone_.innerHTML
//                this.dragSrc_.innerHTML = ev.target.innerHTML
//
//                ev.target.style.backgroundColor = "white";
//                this.dragSrc_.style.backgroundColor = "white";
//
//                ev.target.innerHTML = tmp;
//                return false;
            },
        },
        fetch ({ store }) {
            store.commit('increment')
        },


        created : function() {

            var source = {'key': this.title, 'value': this.origin}

            this.$store.commit('list/initTest', source);

        },

         mounted: function() {
             var vm = this;

            window.addEventListener('mouseup', function () {
                vm.$store.commit('list/reset')


            })
        }

    }
</script>