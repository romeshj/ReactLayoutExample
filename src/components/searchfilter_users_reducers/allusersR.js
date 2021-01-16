import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadAllUsers} from '../../redux/actions/action-creators'; 

class AllUsers extends Component {
    constructor(props){
        super(props);
		this.state = {
			users : []
		}
    }
	
	
	
	shouldComponentUpdate(nextProps, nextState){
		const {filteredUsers, allusers} = this.props;
		const {users} = this.state;
		if(nextProps.filteredUsers !== filteredUsers || nextProps.allusers !== allusers || nextState.users !== users){
			console.log("shouldComponentUpdate")
			return true;
		}
		return false;
	}
	
	componentDidUpdate(prevProps, prevState){
		const {filteredUsers, allusers} = this.props;
		if(prevProps.filteredUsers !== filteredUsers){
			console.log("componentDidUpdate", allusers)
			
			this.setState({
				users : filteredUsers
			})
		}
	}
	
	
	
    componentDidMount(){
       this.props.loadAllUsers();
    }
	
    render(){
        const {allusers} = this.props;
		const {users} = this.state;
		const u = users && users.length ? users : allusers;
		console.log(u)
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
                            u.map(user =>{
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
            </div>
        )
    }

}


const mapStateToProps = (state) => {
   return {
		allusers: state.searchfilterreducer.allusers,
		filteredUsers : state.searchfilterreducernew.filteredUsers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		loadAllUsers : () => dispatch(loadAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)

