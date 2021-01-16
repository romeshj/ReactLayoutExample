import React, { Component, Fragment } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import data from './data';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import '../../css/autocomplete.css';
import userIcon from '../../images/user-png-icon-26.jpg';

class ReactBootstrapAutoComplete extends Component{
    constructor(props){
        super(props);
		this.state = {
			selected : [],
			open: undefined
		}
		this.setSelected = this.setSelected.bind(this);
		this.searchHandler = this.searchHandler.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}
	
	setSelected(obj){
		this.setState({
			selected : obj,
			open : undefined
		})
	}
	
	searchHandler(){
		const {selected} = this.state;
		//console.log(selected[0])
		if(selected && selected.length) {
			console.log(selected[0].label)
		}
	}
	
	clickHandler(){
		const {open} = this.state;
		this.setState({
			open : !open
		})
	}
	
    render(){
		const {selected, open} = this.state;
        return (
            <div style={{'position' : 'relative'}}>
				<Typeahead
				  id="basic-example"
				  onChange={this.setSelected}
				  options={data}
				  placeholder="Choose a state..."
				  selected={selected}
				  open={open}
				  renderMenuItemChildren = {(option, { text }, index) => (
					<Fragment>
					  <img src={userIcon} alt='' style={{'paddingRight':'5px'}} />
					  <span search={text}>
						{option.label}
					  </span>
					</Fragment>
				  )}
				/>
				<button type='button' className='auto-complete-button' onClick={this.clickHandler}>></button>
				<br />
				<button type='button' className='btn btn-primary' onClick={this.searchHandler}>SEARCH</button> <br/>
			</div>
		)
    }
}

export default ReactBootstrapAutoComplete