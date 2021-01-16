import React, { Component } from 'react';
import { UserContext } from './UserContext';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../../css/table.css';
import ExportXLS from '../exportexcel/exportexcel';
import paginationFactory from 'react-bootstrap-table2-paginator';

class ListingTable extends Component{
    constructor(props){
        super(props);
		this.formatNumber = this.formatNumber.bind(this);
	}
	
	formatNumber(number){
	  return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}
	
    render(){
		
		const columns = [
		{
		  dataField: 'id',
		  text: 'ID',
		  headerStyle: { 'width': '50px' }
		}, {
		  dataField: 'name',
		  text: 'Name',
		  headerStyle: { 'width': '250px' },
		  sort: true
		}, {
		  dataField: 'phone',
		  text: 'Phone'
		}, {
		  dataField: 'address',
		  text: 'Address'
		}, {
		  dataField: 'city',
		  text: 'City',
		  sort: true
		}, {
		  dataField: 'zip',
		  text: 'Zip',
		  headerStyle: { 'width': '100px' }
		}
		, {
		  dataField: 'sal',
		  text: 'Salary',
		  formatter: (cell, row) => '$' + this.formatNumber(cell),
		  headerStyle: { 'width': '100px' },
		  sort: true
		}
	];
	
	const tableRowEvents = {
	   onClick: (e, row, rowIndex) => {
		 console.log(row)
		 console.log(`clicked on row with index: ${rowIndex}`);
	   }
	}
	
	const rowClasses = (row, rowIndex) => {
		return 'table-row';
	};
	
	const selectRow = {
	  mode: 'radio',
	  hideSelectColumn: true,
	  clickToSelect: true,
	  bgColor: '#00FFFF'
	};
	
	
	
	
		
        return (
            <UserContext.Consumer>
			{context => {				
				console.log(context);
				const {users, filterValue} = context;
				const filterUsers = filterValue && filterValue.length ? users.filter(user => {
					return user.name.toLowerCase().includes(filterValue) || user.city.toLowerCase().includes(filterValue) || user.sal.toString().includes(filterValue)
				}) : users;
				
				const customTotal = (from, to, size) => (
				  <span className="react-bootstrap-table-pagination-total">
					Showing { from } to { to } of { size } Results
				  </span>
				);
				
				const options = {
				  paginationSize: 4,
				  //pageStartIndex: 0,
				  // alwaysShowAllBtns: true, // Always show next and previous button
				  withFirstAndLast: false, // Hide the going to First and Last page button
				  hideSizePerPage: true, // Hide the sizePerPage dropdown always
				  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
				  firstPageText: 'First',
				  prePageText: '<',
				  nextPageText: '>',
				  lastPageText: 'Last',
				  nextPageTitle: 'First page',
				  prePageTitle: 'Pre page',
				  firstPageTitle: 'Next page',
				  lastPageTitle: 'Last page',
				  showTotal: false,
				  paginationTotalRenderer: customTotal,
				  disablePageTitle: true,
				  sizePerPageList: [{
					text: '5', value: 5
				  }, {
					text: '10', value: 10
				  }, {
					text: 'All', value: filterUsers.length
				  }] // A numeric array is also available. the purpose of above example is custom the text
				};
	
				return (
					<div>
						<div className="py-3">
								<ExportXLS data={filterUsers} fileName='users' />
						</div>
						 <BootstrapTable version='4' keyField='id' data={ filterUsers } classes='userstable' columns={ columns } selectRow={selectRow} rowEvents={ tableRowEvents } rowClasses={ rowClasses } pagination={ paginationFactory(options) }  />
					</div>
				 )
				}
			}
			</UserContext.Consumer>
		)
    }
}

export default ListingTable