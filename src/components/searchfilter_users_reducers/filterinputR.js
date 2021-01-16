import React, { Component } from 'react';
import {connect} from 'react-redux';
import {filterUsers} from '../../redux/actions/action-creators'; 
class FilterInputR extends Component {
    constructor(props){
        super(props);
		this.filterByInput = this.filterByInput.bind(this);
    }
	
	filterByInput(e){
		const value = e.target.value;
		const {allusers} = this.props;
		const { filterUsers } = this.props;
		filterUsers(allusers, value);
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

const mapStateToProps = (state) => {
	console.log(state)
   return {
		allusers: state.searchfilterreducernew.allusers
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
		filterUsers : (users,val) => dispatch(filterUsers(users,val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterInputR)

