// not application state ,  only the state this reducer is responsible for 
// when argument undefined, return null
export default function(state = null, action)   {
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
        default: state;
    }
    
    return state;
}  