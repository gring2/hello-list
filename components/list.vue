<template>
<div class="list_section">
    <ul class="stack">
        <li>
            <div class="schedule-div">
                <input style="height: 100%" placeholder="add schedule"  @keyup.enter="addSchedule"/>
            </div>
        </li>

        <li v-for="n , i in test"  >
            <div class="schedule-div"  @dragover="over" @dragleave="leave" @drop="drop" @dragstart="drag" @dragenter="enter" v-bind:id="i"  draggable="true">
                <p >

                    {{n}}
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
                mine:null,
                entered:null
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
        methods : {
            addSchedule (ev) {
                let inputed_value = ev.target.value;
                let key_value = this.title
                this.$store.commit('list/input', {key:key_value, inputed:inputed_value})
                ;

            },
            enter (ev){
                if(this.mine === null){
                    this.$store.commit('list/openspace',{key:this.title, event:ev})

                }

            },
            drag (ev) {
                this.mine=ev.target
                this.$store.commit('list/drag', {key:this.title, event:ev})
            },

            over (ev){
                this.$store.commit('list/over', ev)

            },
            leave(ev){
                console.log('leave')
              this.$store.commit('list/leave', {key:this.title, event:ev})
            },

            drop (ev) {

                this.$store.commit('list/drop', {key:this.title, event:ev})

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
                vm.mine=null;

            })
        }

    }
</script>