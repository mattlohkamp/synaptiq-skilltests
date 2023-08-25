import DatePickerList from "../components/DatePickerList";

export default {
	component: DatePickerList,
	title: "DatePickerList",
	tags: ["autodocs"],
};

export const Default = {
	args: {},
};

export const Customized = {
	args: {
		labelText: "Example Dropdown Title ",
		selectedIndex: 3,
		options: [
			{
				label: "please choose an option",
				value: undefined,
			},
			{
				label: "option one",
				value: 1,
			},
			{
				label: "opt 2",
				value: 2,
			},
			{
				label: "number three",
				value: 3,
			},
		],
	},
};
