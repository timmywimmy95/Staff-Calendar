import React, { useState, useEffect, useRef } from 'react';
import { dateContext } from '../context/dateContext';
import Table from './components/Table';
import useFetch from './hooks/useFetch';

const App = () => {
	const dateRef = useRef(new Date());
	const {
		data: staffName,
		loading: staffNameLoading,
		error: staffNameError,
	} = useFetch('http://localhost:8000/staffName.php');
	const {
		data: staffDuty,
		loading: staffDutyLoading,
		error: staffDutyError,
	} = useFetch('http://localhost:8000/staffDuty.php');
	console.log(staffDuty);

	return (
		<>
			<dateContext.Provider value={{ dateRef }}>
				<Table />
			</dateContext.Provider>
		</>
	);
};

export default App;
