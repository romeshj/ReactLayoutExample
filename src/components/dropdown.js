import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/dropdown.css';


class Dropdown extends Component {
		constructor(){
		 super();
		 this.state = {
			   displayMenu: false,
			 };

		  this.showDropdownMenu = this.showDropdownMenu.bind(this);
		  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

		};

		showDropdownMenu(event) {
			this.setState({ displayMenu: true });
		  }

	  hideDropdownMenu() {
		this.setState({ displayMenu: false });
	  }
	  

  render() {
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> My Setting </div>
          { this.state.displayMenu ? (
          <ul>
			 <li><Link to="/agridsearch" onClick={this.hideDropdownMenu}>Olympics Ag Grid</Link></li>
			 <li><Link to="/searchfilter" onClick={this.hideDropdownMenu}>Users Reducers(Search Value)</Link></li>
			 <li><Link to="/searchfilterreducers" onClick={this.hideDropdownMenu}>Search Users Reducers(Data and Search Value)</Link></li>
			 <li><Link to="/searchfiltercontextcl" onClick={this.hideDropdownMenu}>Search Users Context Providers</Link></li>
			 <li><Link to="/searchfiltercontext" onClick={this.hideDropdownMenu}>Search Users Context Providers - useContext</Link></li>
		     <li><Link to="/createpage" onClick={this.hideDropdownMenu}>Create Page</Link></li>
			 <li><Link to="/managepages" onClick={this.hideDropdownMenu}>Manage Pages</Link></li>
			 <li><Link to="/createads" onClick={this.hideDropdownMenu}>Create Ads</Link></li>
			 <li><Link to="/manageads" onClick={this.hideDropdownMenu}>Manage Ads</Link></li>
			 <li><Link to="/activitylogs" onClick={this.hideDropdownMenu}>Activity Logs</Link></li>
			 <li><Link to="/settings" onClick={this.hideDropdownMenu}>Setting</Link></li>
			 <li><Link to="/logout" onClick={this.hideDropdownMenu}>Log Out</Link></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;