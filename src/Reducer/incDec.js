import { INCRE_ITEM,DECRE_ITEM } from "../Actions/actionTypes"


export const countReducer=(state={count:0},action)=>{
    console.log(state)
    switch(action.type){
        case INCRE_ITEM:
            return {
                count:state.count+1
            }
        case DECRE_ITEM:
            return {
                count:state.count-1
            }
        default:
            return state
    }
}