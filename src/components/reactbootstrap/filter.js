import React, { Component } from 'react';
import { UserContext } from './UserContext';

class Filter extends Component{
	constructor(props){	
		super(props);
	}
	
	render(){
		return (
			<UserContext.Consumer>
			{context => {				
				console.log(context);
				const {setFilterValue} = context;
				return (
						<div>
							<div style={{width: "300px"}}>
							  Search By Name or City :  <input  style={{width: "100%"}} placeholder='Filter by' type='text' onChange={(e) => setFilterValue(e.target.value)} />
							</div>
								  
						</div>
				)
			}}
			</UserContext.Consumer>
		)
	}
}

export default Filter
 
