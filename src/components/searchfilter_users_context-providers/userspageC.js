import React, {Component} from 'react';
import { UserProvider } from './UserContext';
import AllUsersC from './allusersC';
import FilterInputC from './filterinputC';

class UsersPageC extends Component {
    constructor(props){
        super(props);
    }
	
	
    render(){
        return (
		<UserProvider>
               <FilterInputC />
				<AllUsersC />
        </UserProvider>
        )
    }

}
export default UsersPageC
