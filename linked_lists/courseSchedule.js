// We are given a list of course prerequisites in the form of pairs [a, b],
// which means course 'a' depends on course 'b' (i.e., you must take 'b' before 'a').

// Our goal is to determine whether it's possible to finish all the given courses,
// which comes down to checking if the directed graph formed by these dependencies
// contains a cycle or not.

// Step 1: Build an adjacency list (or dependency map) to represent the graph.
// Each course is a node, and for each node, we store the list of its prerequisites.
// Example: if prerequisites = [[0, 1], [0, 2]], the adjacency list becomes:
// { 0: [1, 2] } — meaning course 0 depends on courses 1 and 2.

// Step 2: We need to check for cycles in this graph.
// To do this, we perform a DFS (Depth-First Search) traversal starting from each course.

// Step 3: While doing DFS, we maintain two sets:
// - `visitSet`: Tracks nodes in the current DFS call stack (used to detect cycles).
// - `completedSet`: Tracks courses that are already verified as safe (no cycles from them).

// Step 4: In the DFS function:
// - If we encounter a course that is already in `visitSet`, a cycle is detected (return false).
// - If a course has no prerequisites or all of them are already verified (i.e., in `completedSet`),
//   we mark it as safe and return true.
// - Otherwise, we add the course to `visitSet`, recurse on its dependencies,
//   and finally remove it from `visitSet` once its check is complete.

// Step 5: If all DFS calls from all courses return true (i.e., no cycles detected),
// we conclude that it's possible to finish all courses.

// This approach ensures we don’t re-check already verified nodes (via memoization),
// and it efficiently detects any cycles that make course completion impossible.

//VERY IMPORTANT
//WE ARE EFFECTIVElY BACKTRACKING HERE AS THIS IS A DIRECTED GRAPH
function courseSchedule(numCourses, prerequisites) {
    let preMap = {};
    let visitSet = new Set();

    for (let i = 0; i < numCourses; i++) {
        preMap[i] = [];
    }

    for (let [crs, dep] of prerequisites) {
        preMap[crs].push(dep);
    }

    function dfs(crs) {
        if (visitSet.has(crs)) {
            return false;
        }

        if (preMap[crs].length === 0) {
            return true;
        }

        visitSet.add(crs);
        for (let pre of preMap[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }

        visitSet.delete(crs);
        preMap[crs] = [];  // memoization
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }

    return true;
}

const csip = [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]];
let numCourses = 5

courseSchedule(numCourses, csip)