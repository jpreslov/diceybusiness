let dieBtn = document.getElementById("die-btn");
let rollBtn = document.getElementById("roll-btn");
let sumBtn = document.getElementById("sum-btn");
let diceCtr = 0;
let diceArr = [];

let diceHolder = document.getElementById("dice-holder");
document.body.appendChild(diceHolder);

let makeDie = () => new Die();

class Die {
  constructor(value) {
    this.value = value;
    this.dice = document.createElement("div");
    this.dice.className = "dice";
    this.dice.id = diceCtr++;
    this.roll();
    this.dice.innerText = this.value;
    diceHolder.appendChild(this.dice);
    diceArr.push(this);
    this.dice.addEventListener("click", () => {
      this.roll();
    });

    this.dice.addEventListener("dblclick", e => {
      diceHolder.removeChild(this.dice);
      let index = diceArr.indexOf(this);
      diceArr.splice(index, 1);
    }); 
  }

  roll() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    this.value = randomNum;
    this.dice.innerText = this.value;
  }
}

dieBtn.addEventListener("click", () => {
  makeDie();
});

rollBtn.addEventListener("click", () =>
  diceArr.forEach(die => {
    die.roll();
  })
);

let sumDiv = document.createElement("div");
sumDiv.className = "sum-div";

sumBtn.addEventListener("click", () => {
  let sum = 0;
  diceArr.forEach(die => (sum = sum + die.value));

  sumDiv.textContent = `The sum of the dice is ${sum}`;
  diceHolder.appendChild(sumDiv);
});
