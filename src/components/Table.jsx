import React, { useState, useEffect, useRef, useContext } from 'react';
import { DateContext } from '../../context/DateContext';
import { DataContext } from '../../context/DataContext';
import daysInMonth from '../../utils/daysInMonth';

const Table = () => {
	const { dateRef } = useContext(DateContext);
	const {
		staffName,
		staffNameLoading,
		staffDuty,
		staffDutyLoading,
		staffLeave,
		staffLeaveLoading,
	} = useContext(DataContext);
	const days = daysInMonth.map((day) => <td key={day}>{day}</td>);
	console.log(staffNameLoading, staffName);

	//remove if staff has left
	staffNameLoading
		? console.log('loading')
		: staffName.forEach((person) => {
				if (new Date(person.endDate) < new Date()) {
					const index = staffName.indexOf(person);
					staffName.splice(index, 1);
				}
		  });

	// const names = staffNameLoading
	// 	? 'Loading'
	// 	: staffName.map((person) => console.log(person.name));
	return (
		<>
			<h1>{dateRef.current.toDateString()}</h1>
			<table>
				<thead>
					<tr>{days}</tr>
				</thead>
				{/* <tbody>{names}</tbody> */}
			</table>
		</>
	);
};

export default Table;
