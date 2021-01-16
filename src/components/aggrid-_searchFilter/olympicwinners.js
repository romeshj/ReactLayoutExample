import React, { Component } from 'react';
import { connect } from "react-redux";
import {getOlympicWinners, getChartOptions, showPane, showRowDetails} from '../../redux/actions/action-creators';
import { AgGridReact } from 'ag-grid-react';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
let options = null;
class OlympicWinners extends Component{
    constructor(props){
        super(props);
        console.log(props);
		this.onGridReady = this.onGridReady.bind(this);
		this.getSelectedRowData = this.getSelectedRowData.bind(this);
		this.state = {
			gridApi : null,
			options : null,
			olymdata:[],
			isPaneOpen: false,
			rowDetail : null
		}
		this.showDetails = this.showDetails.bind(this);
	}
	
	shouldComponentUpdate(nextProps, nextState){
		console.log(this.props)
		console.log(nextProps)
		const {filterOlympics, olympic_data, chartOptions, showDetailsPane, rowDetailsData} = this.props;
		
		const {olymdata, options, isPaneOpen, rowDetail} = this.state;
		console.log("showDetailsPane", showDetailsPane)
		if(nextProps.filterOlympics !== filterOlympics || nextProps.olympic_data !== olympic_data || nextState.olymdata !== olymdata){
			console.log("shouldComponentUpdate")
			return true;
		}
		if(nextProps.chartOptions !== chartOptions || nextProps.olympic_data !== olympic_data || nextState.options !== options){
			console.log("chartOptions shouldComponentUpdate")
			return true;
		}
		if(nextProps.showDetailsPane !== showDetailsPane || nextProps.olympic_data !== olympic_data || nextState.isPaneOpen !== isPaneOpen){
			console.log("showDetailsPane shouldComponentUpdate")
			return true;
		}
		if(nextProps.rowDetailsData !== rowDetailsData || nextProps.olympic_data !== olympic_data || nextState.rowDetail !== rowDetail){
			console.log("rowDetail shouldComponentUpdate")
			return true;
		}
		
		return false;
	}
	
	componentDidUpdate(prevProps, prevState){
		const {filterOlympics, olympic_data, chartOptions, showDetailsPane, rowDetailsData} = this.props;
		if(prevProps.filterOlympics !== filterOlympics){
			//console.log("componentDidUpdate", olympic_data)
			const filterData = olympic_data.filter(d => {
				return d.country.toLowerCase().includes(filterOlympics) || d.athlete.toLowerCase().includes(filterOlympics) || d.sport.toLowerCase().includes(filterOlympics)
			})
			console.log("filterData ==== ", filterData)
			this.setState({
				olymdata : filterData,
				options :null
			})
		}
		
		if(prevProps.chartOptions !== chartOptions){
			console.log("componentDidUpdate ==== ", chartOptions)
			this.setState({
				options : chartOptions
			})
		}
		
		if(prevProps.showDetailsPane !== showDetailsPane){
			console.log("componentDidUpdate ==== ", showDetailsPane)
			this.setState({
				isPaneOpen : showDetailsPane
			})
		}
		
		if(prevProps.rowDetailsData !== rowDetailsData){
			console.log("componentDidUpdate ==== ", rowDetailsData)
			this.setState({
				rowDetail : rowDetailsData
			})
		}
	}
	
	componentDidMount() {
		const { onGetOlympicWinners } = this.props;
		onGetOlympicWinners();
		
	}
	
	onGridReady(params) {
		const gridapi = params.api;
		console.log(gridapi)
		gridapi.sizeColumnsToFit();
		gridapi.doLayout();
		this.setState({
			gridApi : params.api
		})
	}
	
	getSelectedRowData(params){
		const { gridApi } = this.state;
		const {getChartOptions} = this.props;
		const row = gridApi.getSelectedRows()[0];		
		console.log(row)
		const {gold, silver, bronze} = row;	
		const jsonData = [
			{
			  "label": "Gold",
			  "value": gold
			},
			{
			  "label": "Silver",
			  "value": silver
			},
			{
			  "label": "Bronze",
			  "value": bronze
			}
		];
		
		const series = Object.keys(jsonData[0])
		 options = {
			data: jsonData,
			series: [{
			  type: 'pie',
			  angleKey: series[1],
			  labelKey: series[0]
			}]
		}
		
		console.log(options)
		getChartOptions(options)
	}
	
	showDetails(params, e){
		console.log(params)
		const {showPane, showRowDetails, getChartOptions} = this.props;
		const { gridApi } = this.state;
		const row = params.data;
		const {gold, silver, bronze} = row;	
		const jsonData = [
			{
			  "label": "Gold",
			  "value": gold
			},
			{
			  "label": "Silver",
			  "value": silver
			},
			{
			  "label": "Bronze",
			  "value": bronze
			}
		];
		
		const series = Object.keys(jsonData[0])
		 options = {
			data: jsonData,
			series: [{
			  type: 'pie',
			  angleKey: series[1],
			  labelKey: series[0]
			}]
		}
		//if(params.column.colId == 'country'){	
			showPane(true);
			showRowDetails(params.data)
			getChartOptions(options)
		//}
	}
	
	onBtnExportDataAsCsv = (params) => {
		const { gridApi } = this.state;
		console.log(params);
		console.log(gridApi)
		gridApi.exportDataAsCsv(params);
	};
	
    render(){
		const olymipicColumnDefs = [
			{
			  field: 'country',
			  filter: 'agTextColumnFilter',
			  cellRendererParams: {
				onClick: (e, props) => {
					console.log(" cellRendererParams ", e)
				}
			},
			},
			{
			  field: 'year', width : '100' 
			},
			{
			  field: 'sport'
			},
			{
			  field: 'athlete'
			},
			{ field: 'gold', width : '100' , filter: 'agNumberColumnFilter'},
			{ field: 'silver', width : '100'  },
			{ field: 'bronze', width : '100'  },
			{ field: 'total', width : '100'  },
			{ field: 'age', width : '100'  },
			{
			  field: 'date', width : '100' 
			},
		]
		
		
		const defaultColDef = {
			sortable: true,
			unSortIcon: true,
			sortingOrder: ['asc', 'desc']
		}
		
		const { olympic_data, showPane } = this.props;
		const { options, olymdata, isPaneOpen, rowDetail } = this.state;
		
		
		const gridData = olymdata && olymdata.length ? olymdata : olympic_data;
		console.log( " isPaneOpen ",isPaneOpen)
		const country = rowDetail ? rowDetail.country : '';
		const athlete = rowDetail ? rowDetail.athlete : '';
		const sport = rowDetail ? rowDetail.sport : '';
		const year = rowDetail ? rowDetail.year : '';
		const silver = rowDetail ? rowDetail.silver : '';
		const bronze = rowDetail ? rowDetail.bronze : '';
		const total = rowDetail ? rowDetail.total : '';
		const age = rowDetail ? rowDetail.age : '';
		const date = rowDetail ? rowDetail.date : '';
        return (
            <div>
			    <button onClick={() => this.onBtnExportDataAsCsv()}>
					EXPORT
				</button>
				<div className="ag-theme-alpine" style={{height: '500px'}}>
					<AgGridReact
					columnDefs={olymipicColumnDefs}					
					defaultColDef={defaultColDef}
					rowData={gridData}
					animateRows={true}
					onGridReady={this.onGridReady}
					pagination={true}
					 rowSelection={'single'}
					 onSelectionChanged={this.getSelectedRowData}					 
					onCellClicked ={this.showDetails}
					//onCellMouseOver ={this.showDetails}
				  />
				</div>
				<div>
				{/*options ? <AgChartsReact options={ options } /> : null*/}
				</div>
				<SlidingPane
					//closeIcon={<div>Some div containing custom close icon.</div>}
					isOpen={isPaneOpen || false}
					from="right"
					width="300px"
					onRequestClose={() => showPane(false)}
				  >
					<div>
						<p>Country : {country}</p>
						<p>Athlete : {athlete}</p>
						<p>Sport : {sport}</p>
						<p>Year : {year}</p>
						<p>Silver : {silver}</p>
						<p>Bronze : {bronze}</p>
						<p>Total : {total}</p>
						<p>Age : {age}</p>
						<p>Date : {date}</p>
						{options ? <AgChartsReact options={ options } /> : null}
					</div>
				  </SlidingPane>
			</div>
		)
    }
}

const mapStateToProps = state => {
  return {
	olympic_data: state.olympicreducer.olympicdata,
	filterOlympics : state.olympicreducer.filterOlympics,
	chartOptions : state.olympicreducer.chartOptions,
	showDetailsPane : state.olympicreducer.showDetailsPane,
	rowDetailsData : state.olympicreducer.rowDetailsData
  }
};

const mapDispatchToProps = dispatch => {
  return {
   onGetOlympicWinners: () => dispatch(getOlympicWinners()),
   getChartOptions :(options) => dispatch(getChartOptions(options)),
   showPane : (open) => dispatch(showPane(open)),
   showRowDetails : (r) => dispatch(showRowDetails(r))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OlympicWinners)