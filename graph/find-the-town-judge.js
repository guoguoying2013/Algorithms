/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

1 <= N <= 1000
0 <= trust.length <= 10^4
trust[i].length == 2
trust[i] are all different
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= N

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

input: a graph, array of arrays
total number of nodes.

output: num, 

*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 *
 */
const findJudge = function(N, trust) {
    // count trusts,
    let count = Array(N).fill(0);
    for (let i = 0; i < trust.length; i++) {
        let trusting = trust[i][0];
        let trusted = trust[i][1];
        // the judge should have N - 1 trust
        count[trusting-1] -= 1;
        // if being trusted, +1, if trusing someone else, -1
        count[trusted-1] += 1;
    }
    for (let j = 0; j < count.length; j++) {
        // the judge should have N- 1 trusts
        if (count[j] == N - 1) {
            return j+1;
        }
    }
    return -1;
};