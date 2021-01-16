import React, { Component } from 'react';
import { UserContext } from './UserContext';
import ExportXLS from '../exportexcel/exportexcel';

class AllUsersCL extends Component{
	constructor(props){	
		super(props);
	}
	
	render(){
		return (
			<UserContext.Consumer>
			{context => {				
				console.log(context);
				const {users, filterValue} = context;
				const filterUsers = filterValue && filterValue.length ? users.filter(user => {
					return user.name.toLowerCase().includes(filterValue) || user.city.toLowerCase().includes(filterValue)
				}) : users;
				return (
						<div>
							<table width="100%" border="1">
								<thead>
									<tr>
										<th>NAME</th>
										<th>EMAIL</th>
										<th>PHONE</th>
										<th>ADDRESS</th>
										<th>CITY</th>
										<th>ZIP</th>
									</tr>
								</thead>
								<tbody>
									{
										filterUsers.map(user =>{
											return(
												<tr key={user.id}>
													<td>{user.name}</td>
													<td>{user.email}</td>
													<td>{user.phone}</td>
													<td>{user.address}</td>
													<td>{user.city}</td>
													<td>{user.zip}</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
							<div className="py-3">
								<ExportXLS data={filterUsers} fileName='users' />
							</div>
						</div>
					)
			}}
			</UserContext.Consumer>
		)
	}
}

export default AllUsersCL



