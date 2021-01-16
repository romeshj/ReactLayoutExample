import React, { Component } from 'react';
import {connect} from 'react-redux';
import {filterOlympics} from '../../redux/actions/action-creators'; 
class Search extends Component {
    constructor(props){
        super(props);
		this.filterByInput = this.filterByInput.bind(this);
    }
	
	filterByInput(e){
		const value = e.target.value;
		const { filterOlympics } = this.props;
		filterOlympics(value);
	}

    render(){
        return (
            <div>
                <div style={{width: "300px"}}>
                  <label style={{'padding' : '5px 20px', 'fontWeight' : 'bold'}}>Search by Country or Athlete : </label><input  style={{'width': '100%', 'marginTop' : '0'}} placeholder='Search' type='text' onChange={(e) => this.filterByInput(e)} />
                </div>
				      
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
		filterOlympics : (val) => dispatch(filterOlympics(val))
    }
}

export default connect(null, mapDispatchToProps)(Search)

