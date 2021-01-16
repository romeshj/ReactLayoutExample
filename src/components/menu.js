import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../css/menu.css';
const Menu = (props) => {	
   return(
		<ul id="navigation">
		<li><Link to="/autocomplete">Material UI AutoComplete</Link></li>
		<li><Link to="/reactautocomplete">React AutoComplete</Link></li>
		 <li><Link to="/component2">Component 2</Link></li>
		 <li className="sub">		 
		  <Link to="#">About</Link>		  
			  <ul>
			   <li><Link to="/component1">Component 1</Link></li>
			   <li><Link to="/component2">Component 2</Link></li>
			   <li><Link to="/component1">Component 1</Link></li>
			  </ul>
		 </li>
		 <li>
		  <Link to="/component2">Component 2</Link>
		 </li>
		</ul>
   )
}
export default Menu
