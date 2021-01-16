import React, { Component } from 'react';
import {connect} from 'react-redux';
import {filterByValue} from '../../redux/actions/action-creators'; 
class FilterInput extends Component {
    constructor(props){
        super(props);
		this.filterByInput = this.filterByInput.bind(this);
    }
	
	filterByInput(e){
		const value = e.target.value;
		const { filterByValue } = this.props;
		filterByValue(value);
	}

    render(){
        return (
            <div>
                <div style={{width: "300px"}}>
                  Search By Name or City :  <input  style={{width: "100%"}} placeholder='Filter by' type='text' onChange={(e) => this.filterByInput(e)} />
                </div>
				      
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
		filterByValue : (val) => dispatch(filterByValue(val))
    }
}

export default connect(null, mapDispatchToProps)(FilterInput)

