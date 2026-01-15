/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start
interface TimeEntry {
    value: string;
    timestamp: number;
}

export class TimeMap {
    private store: Map<string, TimeEntry[]>;

    constructor() {
        this.store = new Map<string, TimeEntry[]>();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        this.store.get(key)!.push({ value, timestamp });
    }

    get(key: string, timestamp: number): string {
        const entries = this.store.get(key);
        if (!entries || entries.length === 0) {
            return "";
        }

        let left = 0;
        let right = entries.length - 1;
        let res = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (entries[mid].timestamp <= timestamp) {
                res = entries[mid].value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end
