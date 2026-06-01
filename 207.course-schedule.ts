/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = new Array(numCourses).fill(null).map(() => []);
    const inDegree: number[] = new Array(numCourses).fill(0);
    
    // Build the graph
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }
    
    // Topological sort using Kahn's algorithm
    const queue: number[] = [];
    
    // Add all nodes with in-degree 0
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let processed = 0;
    
    while (queue.length > 0) {
        const course = queue.shift()!;
        processed++;
        
        for (const neighbor of graph[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return processed === numCourses;
}
// @lc code=end
