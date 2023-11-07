import React, { useState, useEffect } from 'react';

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			setLoading(true);

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(
					`Error fetching data. Status: ${response.status}`
				);
			}

			const data = await response.json();
			setData(data);
			setLoading(false);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, loading, error };
}
