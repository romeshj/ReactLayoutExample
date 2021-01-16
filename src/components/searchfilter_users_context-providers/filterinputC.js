import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const FilterInputC = () => {
	const context = useContext(UserContext);
	const {setFilterValue} = context;
	
	const filterByInput = (e) => {
		setFilterValue(e.target.value);		
	}
	return (
            <div>
                <div style={{width: "300px"}}>
                  Search By Name or City :  <input  style={{width: "100%"}} placeholder='Filter by' type='text' onChange={(e) => filterByInput(e)} />
                </div>
				      
            </div>
    )

}

export default FilterInputC

