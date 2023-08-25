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
	const futureMonth = parseInt(_futureMonth);
	const futureDay = parseInt(_futureDay);
	const currentMonth = presentDate.getMonth();
	const currentDay = presentDate.getDate();
	const yearOffset =
		currentMonth > futureMonth || currentDay >= futureDay ? 1 : 0;
	const futureYear = presentDate.getFullYear() + yearOffset;
	const futureDateString = `${futureMonth}/${futureDay}/${futureYear}`;
	const futureDateObject = new Date(futureDateString);
	return futureDateObject.getTime() - presentDate.getTime();
}
