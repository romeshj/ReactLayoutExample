import React, { Component, createRef } from 'react';
import '../../css/reactautocomplete.css';
import userIcon from '../../images/user-png-icon-26.jpg';
let counter = 0;
class ReactAutoComplete extends Component{
    constructor(props){
        super(props);
		this.state ={
			isOpen : false,
			value : '',
			filteredOptions: [],
			activeOptionIndex : 0
		}
		
		this.clickHandler = this.clickHandler.bind(this);
		this.focusHandler = this.focusHandler.bind(this);
		this.blurHandler = this.blurHandler.bind(this);
		this.selectOptionsHandler = this.selectOptionsHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
		this.autoInput = createRef();
		this.wrapperRef = createRef();
		this.listRef =[];
	}
	
	clickHandler(){
		this.autoInput.current.focus();
		const {options} = this.props;
		const {isOpen, value, activeOptionIndex} = this.state;
		let selectedOptions = [];
		if(value !== ''){
			const v = value.indexOf('/');
			const selectVal = value.substring(0, v).trim();
			selectedOptions = options.filter(option => {
				return option.title.toLowerCase().includes(selectVal.toLowerCase())
			})			
		}
		console.log(selectedOptions)
		this.setState({
			isOpen : !isOpen,
			filteredOptions : selectedOptions,
			value
		})
	}
	
	focusHandler(){
		this.setState({
			isOpen : true
		})
	}
	
	blurHandler(event){
		if (!this.wrapperRef.current.contains(event.target)) {
			this.setState({
				isOpen : false
			})
		}
	}
	
	selectOptionsHandler(event){
		this.setState({
			isOpen : false,
			value : event.target.innerText
		})
	}
	
	changeHandler(event){
		const {options} = this.props;
		const userInput = event.target.value;
		const filteredOptions = options.filter(option => {
				return option.title.toLowerCase().includes(userInput.toLowerCase())
		})
		this.setState({
			value : event.target.value,
			filteredOptions
		})		
	}
	
	onKeyDownHandler(e){
		
		console.log(counter)
		const {options} = this.props;
		const {isOpen, value, filteredOptions, activeOptionIndex} = this.state;
		const optionLists = isOpen && filteredOptions && filteredOptions.length ? filteredOptions : options;
		
		if (e.keyCode === 13) {
			//console.log(optionLists[activeOptionIndex], e.target.innerText)
			this.setState({
				activeOptionIndex: 0,
				isOpen: false,
				value: optionLists[activeOptionIndex].title + ' / ' + optionLists[activeOptionIndex].year
			});
			counter = 0;
			//console.log(counter)
		}
		else if (e.keyCode === 38) {
			//this.listRef[activeOptionIndex].focus();
		  //console.log(' activeOptionIndex 38 ' , activeOptionIndex)
		  if (activeOptionIndex === 0) {
			return;
		  }
		  this.setState({ activeOptionIndex: activeOptionIndex - 1 });
		} 
		else if (e.keyCode === 40) {
			//console.log(' activeOptionIndex 40 ' , activeOptionIndex)
			//this.listRef[activeOptionIndex].focus();
			if (activeOptionIndex === filteredOptions.length - 1) {
				return		  
			}
			this.setState({ activeOptionIndex: activeOptionIndex + 1 });
		}
		//this.listRef[activeOptionIndex].focus();
		//this.listRef[this.state.activeOptionIndex + 1].focus();
		//console.log(this.state.activeOptionIndex)
		//onsole.log(document.querySelector(".option-lists").offsetHeight)
		//console.log(document.querySelector(".option-lists").scrollHeight)
		//console.log(document.querySelector("li").offsetHeight)
		//document.querySelector("li.active").focus();
		//this.listRef[options[this.state.activeOptionIndex]].current.focus();
		//console.log(document.querySelector("li").clientHeight)
		//const top = (this.state.activeOptionIndex-1) * 32;
		//console.log(top)
		
		//if(this.state.activeOptionIndex > 6){
		//	document.querySelector(".option-lists").scrollTop = top;
		//}
		
		
	}
	
	componentDidMount() {
        document.addEventListener('click', this.blurHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.blurHandler);
    }
		
    render(){
		//let optionLists;
		const {options} = this.props;
		const {isOpen, value, filteredOptions, activeOptionIndex} = this.state;
		const optionLists = isOpen && filteredOptions && filteredOptions.length ? filteredOptions : options;
		//console.log(' activeOptionIndex render ' , activeOptionIndex)
        return (
            <div ref={this.wrapperRef} className={`auto-complete ${isOpen ? 'open' : ''}`}>
			<input  type="text" value={value} className='auto-complete-input' onChange={this.changeHandler} onKeyDown={this.onKeyDownHandler} onClick={this.clickHandler} ref={this.autoInput}/><button type='button' className='auto-complete-button' onClick={this.clickHandler}>></button>
				{ isOpen ? <div className='option-lists'>
					<ul>
					{
						optionLists.map((option, index) => (
							<li tabIndex='0' ref={option => this.listRef[index] = option}  className={index == activeOptionIndex ? 'active' : ''}  key={index} onClick={this.selectOptionsHandler}><img src={userIcon} alt='' style={{'paddingRight':'5px'}} /> {option.title} / {option.year}</li>
						))
					}
					</ul>
				</div>
				
				: null
				}
				
			</div>
		)
    }
}

export default ReactAutoComplete