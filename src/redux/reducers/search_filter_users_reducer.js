import * as types from '../actions/action-types';

const INITIAL_STATE = {
    allusers :[],
	filterValue : ''
}

const searchfilterreducer = (state = INITIAL_STATE, action) =>  {  

    switch(action.type){
        case types.LOAD_ALL_USERS:
            return {
                    ...state , allusers : action.payload
            }
		case types.FILTER_BY_VALUE:
			const value = action.payload
			console.log(value)
			/*const filterUsers = state.allusers.filter(user => {
				return user.name.toLowerCase().includes(value) || user.city.toLowerCase().includes(value)
			})
			console.log(filterUsers)*/
			return {
                    ...state,
					filterValue : value
            }
		
        default:
        return state
    }

} 

export default searchfilterreducer;
