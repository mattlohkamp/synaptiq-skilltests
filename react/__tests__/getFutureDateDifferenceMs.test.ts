import { describe, expect, test } from "@jest/globals";
import { getFutureDateDifferenceMs } from "@/common/utils";

import convert from "convert";

describe("getFutureDateDifferenceMs", () => {
	test("should properly determine the difference between a present and a future date", () => {
		expect(getFutureDateDifferenceMs("1/15", new Date("1/1/1111"))).toBe(
			convert(14, "days").to("ms")
		);
	});
	test("should return 1 year when day provided is same as present day", () => {
		expect(getFutureDateDifferenceMs("10/10", new Date("10/10/1010"))).toBe(
			convert(1, "year").to("ms")
		);
	});
	test("should know how many days are between halloween and christmas", () => {
		expect(getFutureDateDifferenceMs("12/25", new Date("10/31/1031"))).toBe(
			convert(55, "days").to("ms")
		);
	});
});
