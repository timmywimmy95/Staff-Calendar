import React, { useState, useEffect, useRef, useContext } from 'react';
import { dateContext } from '../../context/dateContext';
import daysInMonth from '../../utils/daysInMonth';

const Table = () => {
	const { dateRef } = useContext(dateContext);
	const days = daysInMonth.map((day) => <td key={day}>{day}</td>);
	return (
		<>
			<h1>{dateRef.current.toDateString()}</h1>
			<table>
				<thead>
					<tr>{days}</tr>
				</thead>
			</table>
		</>
	);
};

export default Table;
