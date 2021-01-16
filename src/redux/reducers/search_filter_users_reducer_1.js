import * as types from '../actions/action-types';

const INITIAL_STATE = {
    allusers :[],
	filteredUsers : []
}

const searchfilterreducernew = (state = INITIAL_STATE, action) =>  {  

    switch(action.type){
        case types.LOAD_ALL_USERS:
            return {
                    ...state , allusers : action.payload
            }
		case types.FILTER_USERS:		
			const users = action.payload.users;
			const value = action.payload.value;
			console.log(users)
			console.log(value)
			const filteredUsers = users.filter(user => {
				return user.name.toLowerCase().includes(value) || user.city.toLowerCase().includes(value)
			})
			console.log(filteredUsers)
			return {
                    ...state,
					filteredUsers
            }
		
        default:
        return state
    }

} 

export default searchfilterreducernew;
