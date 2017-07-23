import _ from 'lodash';
export const state = () => ({
        test:{},
        dragSrc_: "",
        dragClone_: "",
        tmp:{},
        success:false
})
// export const getters = {
//     test (state) {
//         return state.test
//     },
//     dragSrc_(state){
//         return state.dragSrc_
//     },
//     dragClone_(state) {
//         return state.dragSrc_
//     }
// }
export const mutations = {
    input(state, passObj){
        state.test[passObj.key].push(passObj.inputed)

    },
    drag (state, evObj) {
        state.success=false;
        state.tmp={key:evObj.key, val: evObj.event.target.textContent};
        let ev = evObj.event

        // ev.dataTransfer.setData("text/plain", ev.target.id);
         state.dragSrc_ = ev.target
        // state.dragClone_ = ev.target.cloneNode(true)//.parentElement

//         ev.target.innerHTML = "";
        ev.target.style.color="#026AA7"
         ev.target.style.backgroundColor = "#026AA7";
    },
    over (state, ev){
        ev.preventDefault();
        // dropEffect를 move로 설정.
        ev.dataTransfer.dropEffect = "move"

    },
    openspace(state,evObj){
        let ev = evObj.event;
        let key = evObj.key
        let val = ev.target.textContent.trim()
        let index = state.test[key].indexOf(val)

        if(index > -1 ){
            state.test[key].splice(index,0, null)

        }

    },
    leave(state,evObj){
        let ev = evObj.event;
        let key = evObj.key
        let existing_null = state.test[key].indexOf(null);
        if(existing_null > -1){
            state.test[key].splice(existing_null,1)
        }
        // let val = ev.target.textContent.trim()
        // if(val === "" || val.length <=0) {
        //     let index = state.test[key].indexOf(null)
        //     state.test[key].splice(index,1)
        // }

        return false;

    },
    drop (state ,evObj) {
        let ev = evObj.event;
        let key = state.tmp.key
//        let val = parseInt(state.tmp.val)
        let val = state.tmp.val.trim()

        let index = state.test[key].indexOf(val)

        ev.preventDefault();
        if(key === evObj.key){
            let target_val = evObj.event.target.textContent.trim()

//            let target_val = parseInt(evObj.event.target.textContent)
            let target_index = state.test[key].indexOf(target_val)
            state.test[key].splice(index,1, target_val)
            state.test[key][target_index] = val;
            state.success=true;
            state.dragSrc_.style.backgroundColor = "white";
            state.dragSrc_.style.color="black"
        }

        else{
            let target_index = state.test[evObj.key].indexOf(null)
            state.test[evObj.key].splice(target_index,1,val)

//            state.test[evObj.key].push(val)

            state.test[key].splice(index,1)
            state.dragSrc_.style.backgroundColor = "white";
            state.dragSrc_.style.color="black"
            state.success=true;

        }

//        state.test[key].splice(state.test[key].indexOf(val),1)
        // 대상의 id를 가져와 대상 DOM에 움직인 요소를 추가합니다.
        // var tmp = state.dragClone_.innerHTML
        // state.dragSrc_.innerHTML = ev.target.innerHTML

//        ev.target.style.backgroundColor = "white";

        // ev.target.innerHTML =  tmp;
//        state.test=tt
        return false;

    },
    initTest(state, source){
        state.test[source['key']] = source['value'];
    },
    reset(state) {
        if(state.success === false){

            state.dragSrc_.textContent = state.tmp.val
            state.dragSrc_.style.color="black"

            state.dragSrc_.style.backgroundColor='white'
        }

    },
}