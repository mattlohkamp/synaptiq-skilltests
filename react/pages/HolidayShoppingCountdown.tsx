import "@/app/globals.css";
import { getFutureDateDifferenceMs } from "@/common/utils";
import DatePickerList, {
	DatePickerListOption,
} from "@/components/DatePickerList";
import convert from "convert";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const mapHolidaysToOptions = ({ name }: { name: string }, i: number) => ({
	label: name,
	value: i + 1, //	increment to account for empty option
});

export default function HolidayShoppingCountdown() {
	const presentDateAtInit = new Date();
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
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="w-full max-w-3xl items-center justify-between text-xl lg:flex">
				<Image
					src="https://y.yarn.co/026b65c5-9ada-46b8-b1ec-11135f7efe41_text.gif"
					alt="There's only 365 days left till next Halloween!"
					priority
					width={400}
					height={240}
				/>
				<p>
					Do you have your shopping done yet?
					<br />
					<em className="italic">How long do you have left??</em>
					<br />
					Let&apos;s find out...
				</p>
			</div>
			<div className="w-full max-w-3xl items-center justify-center text-xl lg:flex m-8">
				<DatePickerList
					options={options}
					onChange={datePickerListOnChange}
					selectedIndex={selectedIndex}
					labelText="How many days left to shop for... "
				/>
			</div>
			{selectedIndex > 0 ? (
				<p className="text-center text-2xl lg:flex">
					There&apos;s only&nbsp;
					<strong className="inline">
						{Math.floor(
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
			) : null}
		</main>
	);
}
