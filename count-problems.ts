import { readdir } from "node:fs/promises";

async function countProblems() {
    const files = await readdir(".");
    const problems = new Set<string>();

    for (const file of files) {
        // We consider it a problem if:
        // 1. It starts with a number (e.g., 1.two-sum.ts)
        // 2. It has a .test.ts accompaniment (excluding known utilities)

        if (/^\d+\./.test(file)) {
            // Extract the problem number or the whole base name
            // To be safe, we'll use the part before the first dots we want to strip
            const base = file.replace(/\.(test\.ts|ts|md|bin|cpp|excalidraw\.md)$/, "");
            // If it starts with a number followed by a dot, we might want to just use the number
            // but some problems might share a number (though unlikely on LeetCode)
            // For now, let's treat the part before the extensions as the problem ID
            problems.add(base);
        } else if (file.endsWith(".test.ts")) {
            const base = file.replace(/\.test\.ts$/, "");
            // Exclude utilities if any (though currently none have .test.ts)
            if (!base.includes("Heap")) {
                problems.add(base);
            }
        }
    }

    // Final pass to consolidate different names for the same problem ID (number)
    // e.g. "242.valid-anagram" and "242.valid.excalidraw"
    const uniqueByNumber = new Map<string, string>();
    const nonNumbered = new Set<string>();

    for (const prob of problems) {
        const match = prob.match(/^(\d+)\./);
        if (match) {
            const num = match[1];
            // Keep the "most descriptive" name (the one that is not .excalidraw or similar)
            if (!uniqueByNumber.has(num) || prob.length > uniqueByNumber.get(num)!.length) {
                if (!prob.includes("excalidraw")) {
                    uniqueByNumber.set(num, prob);
                } else if (!uniqueByNumber.has(num)) {
                    uniqueByNumber.set(num, prob);
                }
            }
        } else {
            nonNumbered.add(prob);
        }
    }

    const total = uniqueByNumber.size + nonNumbered.size;
    console.log(`Total problems solved: ${total}`);

    if (total > 0) {
        console.log("\nBreakdown:");
        console.log(`- Numbered problems: ${uniqueByNumber.size}`);
        console.log(`- Non-numbered problems: ${nonNumbered.size}`);
    }
}

countProblems().catch(console.error);
