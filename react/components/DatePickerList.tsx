import { ChangeEvent, ChangeEventHandler, useState } from "react";

//	TODO: reference this union directly?
type HTMLOptionElementValue = string | number | readonly string[] | undefined;

export type DatePickerListOption = {
	label: string;
	value?: HTMLOptionElementValue;
};

export default function DatePickerList({
	options = [
		{
			label: "Yesterday",
			value: 0,
		},
		{
			label: "Today",
			value: 1,
		},
		{
			label: "Tomorrow",
			value: 2,
		},
	],
	selectedIndex = 0,
	onChange = () => {},
}: //	TODO: add an empty option config?
{
	options?: DatePickerListOption[];
	selectedIndex?: number;
	onChange?: ChangeEventHandler<HTMLSelectElement>;
}) {
	return (
		<select onChange={onChange} value={options[selectedIndex].value}>
			{options.map(({ value, label }, i) => (
				<option key={i} value={value} label={label} />
			))}
		</select>
	);
}
