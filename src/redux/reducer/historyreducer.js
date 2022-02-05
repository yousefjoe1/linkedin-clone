import { ADDPOST, SEARCH } from "../actions/type"

const historyreducer = (state = {search: [],posts: []},action)=>{
    if(action.type === SEARCH){
     return {
         ...state,search: [...state.search,action.searchtext]
     }
    }
    if(action.type === ADDPOST){
        return {
            ...state,posts: [...state.posts,action.post]
        }
    }
    return state;
}

export default historyreducer