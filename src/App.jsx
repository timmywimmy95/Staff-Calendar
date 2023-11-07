import React, { useState, useEffect, useRef } from 'react';
import { DateContext } from '../context/DateContext';
import Table from './components/Table';
import useFetch from './hooks/useFetch';
import { DataContext } from '../context/DataContext';

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

	const {
		data: staffLeave,
		loading: staffLeaveLoading,
		error: staffLeaveError,
	} = useFetch('http://localhost:8000/staffLeave.php');

	return (
		<>
			<DataContext.Provider
				value={{
					staffName,
					staffNameLoading,
					staffNameError,
					staffDuty,
					staffDutyLoading,
					staffDutyError,
					staffLeave,
					staffLeaveLoading,
					staffLeaveError,
				}}
			>
				<DateContext.Provider value={{ dateRef }}>
					<Table />
				</DateContext.Provider>
			</DataContext.Provider>
		</>
	);
};

export default App;
