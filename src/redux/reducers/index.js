import { combineReducers} from 'redux';
import olympicreducer from './olympic_reducer';
import piechartreducer from './pie_chart_reducer';
import searchfilterreducer from './search_filter_users_reducer';
import searchfilterreducernew from './search_filter_users_reducer_1';


export default combineReducers({
	olympicreducer,
	piechartreducer,
	searchfilterreducer,
	searchfilterreducernew
})
