import { multiply } from "./43.multiply-strings";

describe("multiply", () => {
    it("should return '6' for '2' * '3'", () => {
        expect(multiply("2", "3")).toBe("6");
    });

    it("should return '12' for '2' * '6'", () => {
        expect(multiply("2", "6")).toBe("12");
    });

    it("should return '0' for '0' * '123'", () => {
        expect(multiply("0", "123")).toBe("0");
    });

    it("should return '140' for '12' * '12' - wait no, 12*12=144", () => {
        expect(multiply("12", "12")).toBe("144");
    });

    it("should return '56088' for '123' * '456'", () => {
        expect(multiply("123", "456")).toBe("56088");
    });

    it("should return '8858886' for '1234' * '7179'", () => {
        expect(multiply("1234", "7179")).toBe("8858886");
    });

    it("should handle large numbers", () => {
        expect(multiply("999", "999")).toBe("998001");
    });
});
