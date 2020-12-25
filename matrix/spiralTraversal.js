/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */


 // edge case 1: 
 //     [[1], [2], [3]]
 // edge case 2:
 //     [[1, 2, 3]]
 // time complexity: O(n), n i the total number of elements in this input matrix. 
 // space complexity: O(n), information stored in variable results
var spiralTraversal = function(matrix) {
    let startRowIndex = 0;
    let endRowIndex= matrix.length - 1;
    let startColIndex = 0;
    let endColIndex = matrix[0].length - 1;
    let results = [];

    while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
        for (var i = startColIndex; i <= endColIndex; i++) {
            results.push(matrix[startRowIndex][i]);
        }
        startRowIndex++;

        for (var j = startRowIndex; j <= endRowIndex; j++) {
            results.push(matrix[j][endColIndex]);
        }
        endColIndex--;

        if (startRowIndex <= endRowIndex) {
            for (var k = endColIndex; k >= startColIndex; k--) {
                results.push(matrix[endRowIndex][k]);
            }
            endRowIndex--;
        }

        if (startColIndex <= endColIndex) {
            for (var m = endRowIndex; m >= startRowIndex; m--) {
                results.push(matrix[m][startColIndex]);
            }
            startColIndex++;
        }
    }

    return results;
  };

  // testing
  const matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ];
  const matrix2 = [[1], [2], [3]];
  const matrix3 = [[1, 2, 3]];

  console.log(spiralTraversal(matrix1));
  console.log(spiralTraversal(matrix2));
  console.log(spiralTraversal(matrix3));