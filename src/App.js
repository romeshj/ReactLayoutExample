import React , {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import ComponentA from './components/component1';
import ComponentB from './components/component2';
import CreatePage from './components/createpage';
import ManagePages from './components/managepages';
import CreateAds from './components/createads';
import ManageAds from './components/manageads';
import ActivityLogs from './components/activitylogs';
import Settings from './components/settings';
import LogOut from './components/logout';

import SimpleGrid from './components/simpleaggrid';
import UsersPage from './components/searchfilter_users/userspage';
import UsersPageR from './components/searchfilter_users_reducers/userspageR';
import UsersPageC from './components/searchfilter_users_context-providers/userspageC';
import UsersPageCL from './components/searchfilter_users_context-providers_class/userspageCL';
import Olympics from './components/aggrid-_searchFilter/olympics';
import AutoComplete from './components/autocomplete';
import MainForm from './components/autocomplete/main';
import MainApp from './components/reactbootstrap/mainapp';

class App extends Component{
  render(){
      return(
        <div className='h-100'>
          <Router>
            <Switch>
				<div style={{'padding' : '10px', 'height' : '100%'}}>   
					<div className='row grow w-100 h-100'>
						<div className='col-sm-12 col-md-12 bg-secondary py-3 header'>
							<Header />
						</div>
						<div className='col-md-2 bg-info py-3 sidebar'>
							<Sidebar />
						</div>
						<div className='main col-sm-12 col-md-10 h-100 py-3'>
							<Route exact path="/component1" component={ComponentA} />
							<Route path="/component2" component={ComponentB} />
							<Route path="/createpage" component={CreatePage} />							
							<Route path="/managepages" component={ManagePages} />
							<Route path="/createads" component={CreateAds} />
							<Route path="/manageads" component={ManageAds} />
							<Route path="/activitylogs" component={ActivityLogs} />
							<Route path="/settings" component={Settings} />
							<Route path="/logout" component={LogOut} />
							<Route exact path="/simplegrid" component={SimpleGrid} />
							<Route exact path="/searchfilter" component={UsersPage} />
							<Route exact path="/searchfilterreducers" component={UsersPageR} />
							<Route exact path="/searchfiltercontext" component={UsersPageC} />
							<Route exact path="/searchfiltercontextcl" component={UsersPageCL} />
							<Route exact path="/agridsearch" component={Olympics} />
							<Route exact path="/autocomplete" component={AutoComplete} />
							<Route exact path="/reactautocomplete" component={MainForm} />
							<Route exact path="/reactbootstrap" component={MainApp} />
						</div>						
						<div className='row w-100'>
							<div className='col-sm-12 py-3 bg-danger footer'>
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</Switch>
		  </Router>
		</div>
		)
  }
}
export default App;
