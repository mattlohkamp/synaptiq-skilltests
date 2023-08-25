import { ChangeEventHandler, OptionHTMLAttributes } from "react";

export type DatePickerListOption = {
	label: string;
	value: OptionHTMLAttributes<HTMLOptionElement>["value"];
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
	labelText = undefined,
	onChange = () => {},
}: {
	options?: DatePickerListOption[];
	selectedIndex?: number;
	onChange?: ChangeEventHandler<HTMLSelectElement>;
	labelText?: string;
}) {
	return (
		<>
			<label>
				{labelText}
				<select
					onChange={onChange}
					value={options[selectedIndex].value}
					className="cursor-pointer min-w-content text-black">
					{options.map(({ value, label }, i) => (
						<option key={i} value={value} label={label} />
					))}
				</select>
			</label>
		</>
	);
}
