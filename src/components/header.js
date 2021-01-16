import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Dropdown from './dropdown';
import Menu from './menu';

const Header = (props) => {	
   return( 
	<div>
		<div><Link className='btn btn-primary' to="/component1">Component 1</Link> | <Link className='btn btn-primary' to="/component2">Component 2</Link> | <Link className='btn btn-primary' to="/simplegrid">Simple React Ag Grid</Link> | <Link className='btn btn-primary' to="/reactbootstrap">React Bootstrap Example</Link></div>
		<div style={{display: 'flex'}} ><Dropdown /></div>
		<div style={{display: 'flex'}} ><Menu /></div>
    </div>
   )
}
export default Header
