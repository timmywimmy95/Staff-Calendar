import monthNames from './monthNames';
const thirtyDays = [...Array(31).keys()];
const thirtyOneDays = [...Array(32).keys()];

thirtyDays.shift();
thirtyOneDays.shift();

const monthNow = monthNames[new Date().getMonth()];
let exportedArray;

function returnMonth() {
	if (
		monthNow !== 'April' ||
		monthNow !== 'June' ||
		monthNow !== 'September' ||
		monthNow !== 'November'
	) {
		exportedArray = thirtyDays;
	} else {
		exportedArray = thirtyOneDays;
	}
}
returnMonth();

export default exportedArray;
