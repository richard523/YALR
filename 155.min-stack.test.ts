import MinStack from "./155.min-stack";

describe("MinStack", () => {
    let minStack: MinStack;

    beforeEach(() => {
        minStack = new MinStack();
    });

    it("should handle the example sequence correctly", () => {
        minStack.push(1);
        minStack.push(2);
        minStack.push(0);
        expect(minStack.getMin()).toBe(0);
        minStack.pop();
        expect(minStack.top()).toBe(2);
        expect(minStack.getMin()).toBe(1);
    });

    it("should handle a single element", () => {
        minStack.push(-2);
        expect(minStack.top()).toBe(-2);
        expect(minStack.getMin()).toBe(-2);
    });

    it("should handle multiple elements with same minimum", () => {
        minStack.push(2);
        minStack.push(1);
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);
        minStack.pop();
        expect(minStack.getMin()).toBe(1);
        minStack.pop();
        expect(minStack.getMin()).toBe(2);
    });

    it("should handle elements in descending order", () => {
        minStack.push(3);
        expect(minStack.getMin()).toBe(3);
        minStack.push(2);
        expect(minStack.getMin()).toBe(2);
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);
    });
});
