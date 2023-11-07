import React, { useState, useEffect, useRef } from 'react';
import { DateContext } from '../context/DateContext';
import Table from './components/Table';
import useFetch from './hooks/useFetch';
import { DataContext } from '../context/DataContext';

const App = () => {
	const dateRef = useRef(new Date());
	const yearlyData = {};
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

	console.log(staffDuty, staffLeave);

	staffNameLoading
		? console.log('loading')
		: staffName.forEach((person) => {
				if (new Date(person.endDate) < new Date()) {
					//find index of person
					const index = staffName.indexOf(person);
					//remove person from staffName array by splicing
					staffName.splice(index, 1);
				}
				// sort array based on their level
				staffName.sort((a, b) => a.level - b.level);
		  });

	staffDutyLoading
		? null
		: staffDuty.forEach((period) => {
				const year = period.Year_WoY.slice(0, 4);
				const week = period.Year_WoY.slice(-2);

				if (!yearlyData[year]) {
					yearlyData[year] = [];
					yearlyData[year][week] = [];
				} else {
					yearlyData[year][week] = [];
				}

				staffName.forEach((person) => {
					yearlyData[year][week][person.id] = { ...person };
				});
		  });

	console.log(yearlyData);
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
