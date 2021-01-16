import * as types from '../actions/action-types';
const INITIAL_STATE = {
    olympicdata : [],
	fetching : false,
	error : null,
	filterOlympics : '',
	chartOptions : [],
	showDetailsPane :  false,
	rowDetailsData : null
}
const olympicreducer = (state = INITIAL_STATE, action) =>  {
//console.log(" olympicreducer " ,action);
    switch(action.type){
        case types.OLYMPIC_API_CALL_REQUEST:
            return {...state , fetching: true, error: null}
		case types.OLYMPIC_API_CALL_SUCCESS:
            return {...state , fetching: false, olympicdata: action.data}
		case types.OLYMPIC_API_CALL_FAILURE:
            return {...state , fetching: false, olympicdata: null, error: action.error}
		case types.SEARCH_OLYMPICS:
			const value = action.payload
			return {
                    ...state,
					filterOlympics : value
            }
		case types.CHART_OPTIONS:
			const options = action.payload
			return {
                    ...state,
					chartOptions : options
            }
		case types.SHOW_PANE:
			const open = action.payload
			console.log(action.payload)
			return {
                    ...state,
					showDetailsPane : open
            }
		case types.SHOW_ROW_DETAILS:
			const row = action.payload
			console.log(action.payload)
			return {
                    ...state,
					rowDetailsData : row
            }	
        default:
        return state
    }
}
export default olympicreducer;
