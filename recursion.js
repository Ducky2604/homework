
const printItems = function (array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
};

const array = ["😎", "💩", "🤗", "😼", "😂"];
printItems(array);

const array2 = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array2);

const array3 = [
  "😎",
  [
    ["💩", ["🤗"]],
    [[["😼"]], "😂"],
  ],
];
printItems(array3);
