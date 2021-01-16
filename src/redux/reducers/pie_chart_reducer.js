import * as types from '../actions/action-types';

const INITIAL_STATE = {
    options :{}
}

const piechartreducer = (state = INITIAL_STATE, action) =>  {
    switch(action.type){
        case types.PIE_CHART:
            return {
                    ...state , options : action.payload
            }
        default:
        return state
    }
}

export default piechartreducer;
