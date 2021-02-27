/*

Given two words source and target, and a list of words words,
find the length of the shortest series of edits that transforms source to target.
Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.
If the task is impossible, return -1.

Example:
source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions

input: 
    source
    target
    words

output: int, number of nodes, shortest path


Graph, BFS
Model this problem into graph data structure
find the neighbors who haven't been visited.

// map, check if a neighbor is visited or not.
// a helper func tells me if this is a neighbor node <= logic, how to change word in one step

// starting q => [currentNode]

// while q is not empty
    // first in q, check neighbors 
    // if neighbor and not visited yet
        // Is it target ? return depth : push to q

Time Complexity: O(N*K^2) , where N is the length of words and K is the maximum length of any given word.
For each word in words, in order to find neighbors we may construct O(K) new words, each in O(K) time.

Space Complexity: O(NK), the space to store the word list.
*/

function shortestWordEditPath(source, target, words) {
    const visited = {};
    let q = [[source, 0]]; // pair, node val, depth

    const isNeighbor = (currNode, node) => {
        if(currNode.length !== node.length) return false;
        let counter = 0
        for (let i = 0; i < currNode.length; i++) {
            if(currNode[i] !== node[i]) {
                counter ++;
                if (counter >= 2) return false;
            }
        }
        return true;
    }

    while (q.length > 0) {
        let pair= q.shift();
        let currNode = pair[0];
        let depth = pair[1];
        if (currNode === target) return depth;
        depth ++;
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (isNeighbor(currNode, word) && visited[word] === undefined) {
                if (word === target) return depth;
                q.push([word, depth]);
                visited[word] = true;
            }
        }
    }

    return -1;
}

test
let source = "bit";
let target = "dog";
let words = ["but", "put", "big", "pot", "pog", "dog", "lot"]
console.log(shortestWordEditPath(source, target, words), 'should equal to 5');
console.log(shortestWordEditPath('no', 'go', ['to']), 'should equal to -1');
console.log(shortestWordEditPath("bit", "pog", ["but","put","big","pot","pog","pig","dog","lot"]), 'should equal to 3');

/*
hints:

What algorithms might be useful for finding a shortest distance?

We should use a breadth-first search.

Typically in a breadth first search, there is some graph, which for each node has some number of neighbors. How might you find which words in the word list are neighbors?

There are two approaches to finding neighbors of a word.

One approach is for each letter in the original word, change it and check if that word is in the list of words.
Another approach is for each word in the word list, to check if exactly one letter is different between it and the original word.
*/

