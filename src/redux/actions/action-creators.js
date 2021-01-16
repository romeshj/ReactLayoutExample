import * as types from './action-types';
import axios from 'axios';

export const getOlympicWinners = () => ({
	type : types.OLYMPIC_API_CALL_REQUEST
})

export const loadPieChart = (options) => ({
    type : types.PIE_CHART,
    payload : options
})


export const getAllUsers = (allusers) => ({
    type : types.LOAD_ALL_USERS,
    payload : allusers
})

export const loadAllUsers = () => {
    return (dispatch) =>{
        axios.get('./users.json')
		.then(({data: users}) => {
				dispatch(getAllUsers(users))
		})
    }
}

export const filterByValue = (value) => ({
	type : types.FILTER_BY_VALUE,
    payload : value
})

export const filterUsers = (users, value) => ({
	type : types.FILTER_USERS,
    payload : {
		users : users,
		value : value
	}
})

export const filterOlympics = (value) => ({
	type : types.SEARCH_OLYMPICS,
    payload : value
})

export const getChartOptions = (options) => ({
	type : types.CHART_OPTIONS,
    payload : options
})

export const showPane = (show) => ({
	type : types.SHOW_PANE,
    payload : show
})

export const showRowDetails = (row) => ({
	type : types.SHOW_ROW_DETAILS,
    payload : row
})





