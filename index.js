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
const visited = new Map();

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
      visited.set(moveString, [x, y]);
    }
  });
  return possibleMoves;
};

const knightMoves = (start, end) => {
  queue.push(start);
  visited.set(start.toString(), null);

  while (queue.length > 0) {
    const currentSq = queue.shift();
    if (currentSq[0] === end[0] && currentSq[1] === end[1]) {
      const path = [];
      let currentCoord = end;
      while(currentCoord !== null) {
        path.unshift(currentCoord);
        currentCoord = visited.get(currentCoord.toString());
      }
      console.log(`You made it in ${path.length} moves! Here's your path:`);
      path.forEach(coord => console.log(coord));
      return path;
    }

    const nextSq = getPossibleMoves(currentSq);
    for (const square of nextSq) {
      const sqString = square.toString();

      if(!visited.has(sqString)) {
        queue.push(square);
        visited.add(sqString);
      }
    }
  }
  console.log('No path found.');
  return [];
};

knightMoves([1, 5], [5, 3]);

