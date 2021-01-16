import React , { createContext, Component } from 'react';
import data from './users_data';

export const UserContext = createContext();

class UserProvider extends Component {
	constructor(props){	
		super(props);
		
		this.state = {
			users: data,
			filterValue : ''
		}
		this.setFilterValue = this.setFilterValue.bind(this);
	}
	
	setFilterValue(val){
		this.setState({
			filterValue : val
		})
	}
	
		
	render() {
		const { children } = this.props
		const { users, filterValue } = this.state
		
		return (
			<UserContext.Provider
				value={{
				  users,
				  filterValue,
				  setFilterValue : val => this.setFilterValue(val)
				}}
			  >
				{children}
			</UserContext.Provider>
		)
	}
	
	
}

export default UserProvider
