let word;
let liniuta = "";
let letters = [];
let wrong = 1;
let wordLength = 0;
let letterGood = 1;
let numberPicture = 6;
let gameOver = false;
const wordLines = document.getElementById("wordLines");
function functionWord() {
  word = document.getElementById("wordInput").value;
  wordLength = word.length;
  for (let i = 0; i < wordLength; ++i) {
    liniuta += "_ ";
    letters.push(word[i]);
    document.getElementById("wordInput").value = " ";
  }
  document.getElementById("wordLine").innerHTML = liniuta;
}
function functionWord() {
  word = document.getElementById("wordInput").value.trim();
  wordLength = word.length;
  liniuta = "_ ".repeat(wordLength).trim();
  letters = [];
  document.getElementById("wordInput").value = "";
  document.getElementById("wordLine").innerHTML = liniuta;
}

function myletter() {
  if (!gameOver) {
    if (wrong <= numberPicture && letterGood <= wordLength) {
      let letter = document.getElementById("letterInput").value.trim();
      if (!/^[A-Za-z]$/.test(letter)) {
        window.alert("Enter a single valid letter!");
        return;
      }
      if (
        letters.includes(letter.toLowerCase()) ||
        letters.includes(letter.toUpperCase())
      ) {
        window.alert(
          "You have already introduced this letter. Choose another letter."
        );
        return;
      }
      document.getElementById("letterInput").value = "";
      letters.push(letter.toLowerCase());
      let letterFound = false;
      for (let i = 0; i < wordLength; ++i) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
          liniuta =
            liniuta.substring(0, 2 * i) +
            word[i] +
            liniuta.substring(2 * i + 1);
          letterFound = true;
        }
      }
      if (letterFound) {
        ++letterGood;
        document.getElementById("wordLine").innerHTML = liniuta;
        if (liniuta.indexOf("_") === -1) {
          window.alert("Congratulations, you win!");
          gameOver = true;
        }
      } else {
        ++wrong;
        switch (wrong) {
          case 2:
            document
              .getElementById("picture")
              .setAttribute("src", "Picture2.png");
            break;
          case 3:
            document
              .getElementById("picture")
              .setAttribute("src", "Picture3.png");
            break;
          case 4:
            document
              .getElementById("picture")
              .setAttribute("src", "Picture4.png");
            break;
          case 5:
            document
              .getElementById("picture")
              .setAttribute("src", "Picture5.png");
            break;
          case 6:
            document
              .getElementById("picture")
              .setAttribute("src", "Picture6.png");
            window.alert("Sorry, you lost!");
            gameOver = true;
            break;
        }
      }
    }
  }
}
