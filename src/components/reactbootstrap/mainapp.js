import React, { Component } from 'react';
import ReactBootstrapAutoComplete from './autocomplete';
import ListingTable from './table';
import Filter from './filter';
import UserProvider from './UserContext';

class MainApp extends Component{
    constructor(props){
        super(props);
	}
		
    render(){
		
        return (
           <UserProvider>
				<div className='row'>
					<div className='col-sm-12 col-md-12 py-3'>
						<ReactBootstrapAutoComplete />
					</div>
				</div>
				<div className='row'>			
					<div className='col-sm-12 col-md-12 py-3'>
						<Filter /><br /><hr/><br/>
						<ListingTable />
					</div>
					
				</div>
			</UserProvider>
		)
    }
}

export default MainApp