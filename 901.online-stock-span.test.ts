import { StockSpanner } from "./901.online-stock-span";

describe("StockSpanner", () => {
    it("should handle basic example", () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(100)).toBe(1);
        expect(stockSpanner.next(80)).toBe(1);
        expect(stockSpanner.next(60)).toBe(1);
        expect(stockSpanner.next(70)).toBe(2);
        expect(stockSpanner.next(60)).toBe(1);
        expect(stockSpanner.next(75)).toBe(4);
        expect(stockSpanner.next(85)).toBe(6);
    });

    it("should handle increasing prices", () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(1)).toBe(1);
        expect(stockSpanner.next(2)).toBe(2);
        expect(stockSpanner.next(3)).toBe(3);
        expect(stockSpanner.next(4)).toBe(4);
    });

    it("should handle decreasing prices", () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(4)).toBe(1);
        expect(stockSpanner.next(3)).toBe(1);
        expect(stockSpanner.next(2)).toBe(1);
        expect(stockSpanner.next(1)).toBe(1);
    });

    it("should handle all same prices", () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(5)).toBe(1);
        expect(stockSpanner.next(5)).toBe(2);
        expect(stockSpanner.next(5)).toBe(3);
        expect(stockSpanner.next(5)).toBe(4);
    });

    it("should handle single element", () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(31)).toBe(1);
    });
});
