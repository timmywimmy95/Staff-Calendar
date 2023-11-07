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

	//housekeep staffName array and re-order
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

	const names = staffNameLoading
		? null
		: staffName.map((person, index) => (
				<tr key={index}>
					<td>{person.name}</td>
				</tr>
		  ));

	return (
		<>
			<h1>{dateRef.current.toDateString()}</h1>
			{staffDutyLoading || staffLeaveLoading || staffNameLoading ? (
				'Loading'
			) : (
				<table>
					<thead>
						<tr>{days}</tr>
					</thead>
					<tbody>{names}</tbody>
				</table>
			)}
		</>
	);
};

export default Table;
