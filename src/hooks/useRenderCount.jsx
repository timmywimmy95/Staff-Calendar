import React, { useRef, useEffect } from 'react';

const useRenderCount = () => {
	const countRef = useRef(1);
	useEffect(() => {
		countRef.current = countRef.current + 1;
	});
	return countRef.current;
};

export default useRenderCount;
