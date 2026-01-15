import { evalRPN } from "./150.evaluate-reverse-polish-notation";

describe("evalRPN", () => {
    it('should evaluate ["2", "1", "+", "3", "*"] to 9', () => {
        expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
    });

    it('should evaluate ["4", "13", "5", "/", "+"] to 6', () => {
        expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
    });

    it('should evaluate ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] to 22', () => {
        expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toBe(22);
    });

    it('should evaluate ["1","2","+","3","*","4","-"] to 5', () => {
        expect(evalRPN(["1", "2", "+", "3", "*", "4", "-"])).toBe(5);
    });

    it('should handle negative results correctly ["2", "1", "-"]', () => {
        expect(evalRPN(["2", "1", "-"])).toBe(1);
    });

    it('should handle negative numbers correctly ["-1", "2", "*"]', () => {
        expect(evalRPN(["-1", "2", "*"])).toBe(-2);
    });

    it('should handle division truncating toward zero ["10", "3", "/"]', () => {
        expect(evalRPN(["10", "3", "/"])).toBe(3);
    });

    it('should handle division truncating toward zero with negative results ["-10", "3", "/"]', () => {
        expect(evalRPN(["-10", "3", "/"])).toBe(-3);
    });
});
