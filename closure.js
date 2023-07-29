function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let currentIndex = 0;

  return function () {
    if (currentIndex === list.length) {
      // If we have reached the end of the list, reset the index to start over
      currentIndex = 0;
    }

    const nextNumber = list[currentIndex];
    currentIndex++;

    return nextNumber;
  };
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6

