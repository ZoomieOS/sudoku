module.exports = function solveSudoku(puzzle) {
  let a = 0;
  function doJob(puzzle, index)
  {
    if (index > 80)
    {
      a = 1;
      return;
    }
    let i = Math.floor(index / 9), j = index % 9;
    if (puzzle[i][j] !== 0)
      return doJob(puzzle, index + 1);
    for (let v = 1; v <= 9; v++)
    {
      if (isValid(i, j, puzzle, v))
      {
        puzzle[i][j] = v;
        doJob(puzzle, index + 1);
      }
    }
    if (a === 0)
      puzzle[i][j] = 0;
  }
  doJob(puzzle, 0)
  return puzzle;
}

function isValid(i, j, puzzle, num)
{
  for (let k = 0; k < puzzle[i].length; k++)
  {
    if (puzzle[i][k] == num)
      return false;
  }
  for (let k = 0; k < puzzle.length; k++)
  {
    if (puzzle[k][j] == num)
      return false;
  }
  let p = Math.floor(i / 3);
  t = Math.floor(j / 3);
  for (let k = 3 * p; k < 3 * p + 3; k++)
  {
    for (let l = 3 * t; l < 3 * t + 3; l++)
    {
      if (puzzle[k][l] == num)
        return false;
    }
  }
  return true;
}