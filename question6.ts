function convertToListofChars(s) {
    let returnList = [];
    let current = [];

    s.forEach(line => {
        let chars = line.split('');
        chars.forEach(c => {
            if (c !== '\r' && c !== '\n' && c !== ' ') {
                current.push(c);
            }
        });
        returnList.push([...current]);
        current = [];
    });

    return returnList;
}

function TransformList(mainList) {
    let up = 0;
    let factor = 1;
    let tempCounter = 0;
    let counter = true;
    for (let i = mainList.length - 1; i >= 0; i--) {
        for (let j = 0; j < mainList[0].length; j++) {
            if (mainList[i][j] === 'O' && i > 0) {
                if (mainList[i - 1][j] !== '#' && mainList[i - 1][j] !== 'O') {
                    mainList[i - 1][j] = 'O';
                    mainList[i][j] = '.';
                    tempCounter = i;
                    if (tempCounter !== mainList.length - 1) {
                        while (mainList[tempCounter + 1][j] === 'O') {
                            mainList[tempCounter][j] = 'O';
                            mainList[tempCounter + 1][j] = '.';
                            if (tempCounter + 1 < mainList.length - 1) {
                                tempCounter++;
                            } else {
                                tempCounter = 0;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return mainList;
}

function sumOfTransformedReflectorDish(TransformedList) {
    let sum = 0;
    let number = TransformedList.length;
    let counter = 0;
    let compareChar = 'O';
    for (let i = number; i > 0; i--) {
        sum += i * TransformedList[counter++].filter(x => x === compareChar).length;
    }
    return sum;
}

let s = [
  "O....#....",
  "O.OO#....#",
  ".....##...",
  "OO.#O....O",
  ".O.....O#.",
  "O.#..O.#.#",
  "..O..#O..O",
  ".......O..",
  "#....###..",
  "#OO..#...."
];
let mainList = convertToListofChars(s);
let TransformedList = TransformList(mainList);
let sum = sumOfTransformedReflectorDish(TransformedList);
console.log(sum);
//136

