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
		expect(getFutureDateDifferenceMs("1/1", new Date("1/1/1111"))).toBe(
			convert(1, "year").to("ms")
		);
	});
});
