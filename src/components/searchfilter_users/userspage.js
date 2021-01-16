import React from 'react';
import AllUsers from './allusers';
import FilterInput from './filterinput';

const UsersPage = (props) => {
	
   return( 
	<div>
		<FilterInput />
		<AllUsers />
    </div>
   )
}
export default UsersPage
