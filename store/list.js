export const state = () => ({
        test:{},
        dragSrc_: "",
        dragClone_: "",
})
export const getters = {
    test (state) {
        return state.test
    },
    dragSrc_(state){
        return state.dragSrc_
    },
    dragClone_(state) {
        return state.dragSrc_
    }
}
export const mutations = {
    drag (state, ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);
        state.dragSrc_ = ev.target
        state.dragClone_ = ev.target.cloneNode(true)//.parentElement

        ev.target.innerHTML = "";
        ev.target.style.backgroundColor = "#026AA7";
    },
    over (state, ev){
        ev.preventDefault();
        // dropEffect를 move로 설정.
        ev.dataTransfer.dropEffect = "move"

    },
    drop (state ,ev) {
        ev.preventDefault();
        // 대상의 id를 가져와 대상 DOM에 움직인 요소를 추가합니다.
        var data = ev.dataTransfer.getData("text");
        var tmp = state.dragClone_.innerHTML
        state.dragSrc_.innerHTML = ev.target.innerHTML

        ev.target.style.backgroundColor = "white";
        state.dragSrc_.style.backgroundColor = "white";

        ev.target.innerHTML = tmp;
        return false;
    },
    initTest(state, source){
        state.test[source['key']] = source['value'];
    },
    reset(state) {
        if(state.dragSrc_.innerHTML === ''){

            state.dragSrc_.innerHTML = state.dragClone_.innerHTML
            state.dragSrc_.style.backgroundColor='white'
        }

    },
}