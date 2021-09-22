/**
 * 1. list janken
 *      - list dalam array
 * 2. ambil pilihan computer random dari list janken
 *      - cari random index
 *          - math.random tentuin angka yang di get sesuai panjang list
 *          - hilangin angka dibelakang koma
 * 3. tentuin inputan valid atau engga
 *      - false return error
 *          - not string, console: input must be string
 *              - cari type inputannya => pake type of
 *          - not in janken list, console: not part of the game
 *              - bisa pake array.includes()
 * 4. tentuin hasil/pemenang jankennya (peraturan atau rules nya)
 * 5. return hasil
 */

function Janken(userChoice) {
  const rules = {
    rock: {
      win: "scissors",
      lose: "paper",
    },
    paper: {
      win: "rock",
      lose: "scissors",
    },
    scissors: {
      win: "paper",
      lose: "rock",
    },
  };

  const jankenList = Object.keys(rules);

  const randomIndex = Math.floor(Math.random() * jankenList.length);
  const computerChoice = jankenList[randomIndex];

  if (typeof userChoice !== "string") return "input must be string";

  if (!jankenList.includes(userChoice)) return "is not part of the game";

  if (userChoice === computerChoice) {
    return "Draw! There is no winner";
  } else {
    if (computerChoice === rules[userChoice].win) {
      return `Computer = ${computerChoice} vs User = ${userChoice} => The winner is User - ${userChoice}`;
    } else {
      return `Computer = ${computerChoice} vs User = ${userChoice} => The winner is Computer - ${computerChoice}`;
    }
  }
}

console.log(Janken("Bottle"));
console.log(Janken(5));
console.log(Janken("scissors"));
