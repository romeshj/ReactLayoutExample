import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class SimpleGrid extends Component{
    constructor(props){
        super(props);
		this.onGridReady = this.onGridReady.bind(this);
		this.state = {
			gridApi : null
		}
	}
	
	componentDidMount() {
		
		
	}
	
	onGridReady(params) {
		const gridapi = params.api;
		gridapi.sizeColumnsToFit();
		gridapi.doLayout();
		this.setState({
			gridApi : params.api
		})
	}
	
	currencyFormatter = (params) => {
		return '$' + this.formatNumber(params.value);
	}
	
	formatNumber = (number) => {
	  return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}
	
	myCellCallback = (params) => {	
	  if (params.column.colId === 'price') {
		return this.currencyFormatter(params);
	  } else {
		return params.value;
	  }
	}
	
	getParams = () => {
		return {    
			processCellCallback: this.myCellCallback
		};
	}
	
	onBtnExportData = (params) => {
		const { gridApi } = this.state;
		gridApi.exportDataAsCsv(this.getParams());
	};
	
    render(){
		const olymipicColumnDefs = [
			{ headerName: 'Make', field: 'make' },
			{ headerName: 'Model', field: 'model' },
			{ headerName: 'Price', field: 'price', valueFormatter: this.currencyFormatter }
		]
		
		const rowData = [
			{make: "Toyota", model: "Celica", price: 35000},
			{make: "Ford", model: "Mondeo", price: 32000},
			{make: "Porsche", model: "Boxter", price: 72000}
		]
	
		
        return (
            <div><br/><br/>
                <button onClick={() => this.onBtnExportData()}>
					EXPORT
				</button>
				<br/><br/>
				<div className="ag-theme-alpine" style={{height: '200px'}}>
					<AgGridReact
					columnDefs={olymipicColumnDefs}
					rowData={rowData}
					onGridReady={this.onGridReady}
				  />
				</div>
			</div>
		)
    }
}

export default SimpleGrid