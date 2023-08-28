/**
 *
 * @param {string} futureDate MM/DD formatted string
 * @param {Date} presentDate date to use as offset, defaults to current date
 * @returns {number} miliseconds difference between futureDate and presentDate
 */
export function getFutureDateDifferenceMs(
	futureDate: string,
	presentDate = new Date()
) {
	const [_futureMonth, _futureDay] = futureDate.split("/");
	const futureMonth = parseInt(_futureMonth); //	one-indexed, jan is month 1
	const futureDay = parseInt(_futureDay);
	const currentMonth = presentDate.getMonth(); //	zero-indexed, jan is month 0
	const currentDay = presentDate.getDate();
	const yearOffset =
		futureMonth > currentMonth + 1 ||
		(futureMonth === currentMonth + 1 && currentDay < futureDay)
			? 0
			: 1;
	const futureDateObject = new Date(
		`${futureMonth}/${futureDay}/${presentDate.getFullYear() + yearOffset}`
	);
	return futureDateObject.getTime() - presentDate.getTime();
}
