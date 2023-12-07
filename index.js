const allowedMoves = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];
const min = 0;
const max = 7;
const queue = [];
const visited = new Set();

const getPossibleMoves = ([x, y]) => {
  const possibleMoves = allowedMoves
    .map(([xMove, yMove]) => {
      const newX = x + xMove;
      const newY = y + yMove;
      if (newX >= min && newX <= max && newY >= min && newY <= max) {
        return [newX, newY];
      }
      return null;
    })
    .filter((move) => move !== null);

  possibleMoves.forEach((move) => {
    const moveString = move.toString();
    if (!visited.has(moveString)) {
      queue.push(move);
      visited.add(moveString);
    }
  });
  return possibleMoves;
};

const knightMoves = (start, end) => {
  if (start[0] === end[0] && start[1] === end[1]) {
    return [start];
  }
  console.log("queue:", queue, "visited:", visited);
  return getPossibleMoves(start);
};

knightMoves([3, 2], [5, 1]);
