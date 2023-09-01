export function getGen(array) {
  const numRows = array.length;
  const numCols = array[0].length;
  const newArray = [];

  for (let row = 0; row < numRows; row++) {
    const newRow = [];
    for (let cell = 0; cell < numCols; cell++) {
      let neis = 0;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx === 0 && dy === 0) continue; // Skip the current cell
          const newRowIdx = row + dx;
          const newCellIdx = cell + dy;
          if (
            newRowIdx >= 0 &&
            newRowIdx < numRows &&
            newCellIdx >= 0 &&
            newCellIdx < numCols &&
            array[newRowIdx][newCellIdx]
          ) {
            neis++;
          }
        }
      }

      if (array[row][cell] && (neis > 3 || neis < 2)) {
        newRow.push(false);
      } else if (!array[row][cell] && neis === 3) {
        newRow.push(true);
      } else {
        newRow.push(array[row][cell]);
      }
    }
    newArray.push(newRow);
  }

  return newArray;
}

export function initGen(curr) {
  for (let i = 0; i < curr.length; i++) {
    for (let j = 0; j < curr.length; j++) {
      let rn = Math.floor(Math.random() * 10);
      if (rn < 3) {
        curr[i][j] = true;
      }
    }
  }
  return curr;
}
