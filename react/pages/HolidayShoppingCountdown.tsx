import DatePickerList, {
	DatePickerListOption,
} from "@/components/DatePickerList";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

/**
 *
 * @param {string} futureDate MM/DD formatted string
 * @param {Date} presentDate date to use as offset, defaults to current date
 */
function getFutureDateOffset(futureDate: string, presentDate = new Date()) {
	const [_futureMonth, _futureDay] = futureDate.split("/");
	const futureMonth = parseInt(_futureMonth);
	const futureDay = parseInt(_futureDay);
	const currentMonth = presentDate.getMonth();
	const currentDay = presentDate.getDate();
	const yearOffset =
		currentMonth > futureMonth || currentDay > futureDay ? 1 : 0;
	const futureYear = presentDate.getFullYear() + yearOffset;
	const futureDateString = `${futureMonth}/${futureDay}/${futureYear}`;
	const futureDateObject = new Date(futureDateString);
	return (
		(futureDateObject.getTime() - presentDate.getTime()) /
		//	TODO: break magic nums out into named consts
		//	TODO: maybe break this out to 'minisToDays' util
		(1000 * 3600 * 24)
	);
}

export default function HolidayShoppingCountdown() {
	//	select options
	const presentDateAtInit = new Date();
	//	TODO: derive date of next holiday according to formula, e.g. "3rd sunday of March"
	const holidays = [
		{
			name: "Easter",
			date: "3/31",
			giftListKey: "easter",
		},
		{
			name: "Mother's Day",
			date: "5/12",
			giftListKey: "mother",
		},
		{
			name: "Father's Day",
			date: "6/16",
			giftListKey: "father",
		},
		{
			name: "Matt's Birthday",
			date: "8/7",
			giftListKey: "birthday",
		},
		{
			name: "Christmas",
			date: "12/25",
			giftListKey: "christmas",
		},
	];
	const options: DatePickerListOption[] = holidays.map(({ name, date }, i) => ({
		//	TODO: separate def for mapping func
		label: name,
		//	value: Math.floor(getFutureDateOffset(date, presentDateAtInit)),
		value: i + 1, //	increment to account for empty option
	}));
	//	TODO: maybe make this an option for the component?
	options.unshift({
		label: "",
		value: undefined,
	});
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	//	events
	function datePickerListOnChange(e: ChangeEvent<HTMLSelectElement>) {
		const parsedValue = parseInt(
			(e.nativeEvent.target as HTMLSelectElement).value
		);
		const value = Number.isNaN(parsedValue) ? 0 : parsedValue;
		setSelectedIndex(value);
	}

	return (
		<main>
			<Image
				src="https://y.yarn.co/026b65c5-9ada-46b8-b1ec-11135f7efe41_text.gif"
				alt="There's only 365 days left till next Halloween!"
				width={400}
				height={240}
			/>
			<h1>Did you get your shopping done yet?</h1>
			<p>Get started by picking a holiday:</p>
			<DatePickerList
				options={options}
				onChange={datePickerListOnChange}
				selectedIndex={selectedIndex}
			/>
			{selectedIndex > 0 ? (
				<p>
					There&apos;s only{" "}
					{Math.floor(
						getFutureDateOffset(
							holidays[selectedIndex - 1].date,
							presentDateAtInit
						)
					)}{" "}
					days left till next {holidays[selectedIndex - 1].name}!
				</p>
			) : null}
		</main>
	);
}
