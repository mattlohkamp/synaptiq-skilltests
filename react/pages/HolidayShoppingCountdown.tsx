import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { getFutureDateDifferenceMs } from "@/common/utils";
import DatePickerList, {
	DatePickerListOption,
} from "@/components/DatePickerList";
import "@/app/globals.css";
import convert from "convert";
import Head from "next/head";

const mapHolidaysToOptions = ({ name }: { name: string }, i: number) => ({
	label: name,
	value: i + 1, //	increment to account for initial empty option
});

export default function HolidayShoppingCountdown() {
	const presentDateAtInit = new Date();
	const holidays = [
		{
			name: "New Years Eve",
			date: "1/1",
		},
		{
			name: "Valentines Day",
			date: "2/14",
		},
		{
			name: "Easter",
			date: "3/31",
		},
		{
			name: "Mother's Day",
			date: "5/12",
		},
		{
			name: "Father's Day",
			date: "6/16",
		},
		{
			name: "Matt's Birthday",
			date: "8/7",
		},
		{
			name: "Christmas",
			date: "12/25",
		},
	];
	const options: DatePickerListOption[] = [
		{
			label: "Select A Holiday:",
			value: undefined,
		},
		...holidays.map(mapHolidaysToOptions),
	];
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	function datePickerListOnChange(e: ChangeEvent<HTMLSelectElement>) {
		const parsedValue = parseInt(
			(e.nativeEvent.target as HTMLSelectElement).value
		);
		const value = Number.isNaN(parsedValue) ? 0 : parsedValue;
		setSelectedIndex(value);
	}

	return (
		<>
			<Head>
				<title>Holiday Shopping Countdown</title>
			</Head>
			<main id="container" className="p-16 text-center w-full max-w-4xl">
				<div className="bg-black rounded-2xl bg-opacity-80 p-8">
					<h1 className="text-4xl my-8">Do you have your shopping done yet?</h1>
					<p className="text-xl">
						Let&apos;s find out how long you have left...
					</p>
					<div className="my-8">
						<DatePickerList
							options={options}
							onChange={datePickerListOnChange}
							selectedIndex={selectedIndex}
							labelText="How many days left to shop for "
						/>
					</div>
					{selectedIndex > 0 ? (
						<>
							<p className="text-3xl my-6">
								There&apos;s only&nbsp;
								<strong className="inline">
									{Math.ceil(
										convert(
											getFutureDateDifferenceMs(
												holidays[selectedIndex - 1].date,
												presentDateAtInit
											),
											"ms"
										).to("days")
									)}
								</strong>
								&nbsp;days left till next {holidays[selectedIndex - 1].name}!
							</p>
						</>
					) : null}
				</div>
			</main>
			<style jsx>
				{`
					#container {
						background: url("/istockphoto-496569618-612x612.jpg");
					}
				`}
			</style>
		</>
	);
}
