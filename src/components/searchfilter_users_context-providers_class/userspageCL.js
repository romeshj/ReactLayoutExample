import React, {Component} from 'react';
import UserProvider from './UserContext';
import AllUsersCL from './allusersCL';
import FilterInputCL from './filterinputCL';

class UsersPageCL extends Component {
    constructor(props){
        super(props);
    }
	
	
    render(){
        return (
		<UserProvider>
               <FilterInputCL />
				<AllUsersCL />
        </UserProvider>
        )
    }

}
export default UsersPageCL
