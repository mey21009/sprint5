const wordsAndGuesses = [
    { word: 'hangman', guesses: 7 },
    { word: 'javascript', guesses: 8 },
    { word: 'computer', guesses: 6 },
    { word: 'programming', guesses: 9 },
    { word: 'developer', guesses: 7 },
    { word: 'algorithm', guesses: 8 },
    { word: 'application', guesses: 10 },
    { word: 'database', guesses: 7 },
    { word: 'network', guesses: 7 },
    { word: 'interface', guesses: 8 },
    { word: 'security', guesses: 8 },
    { word: 'framework', guesses: 9 },
    { word: 'responsive', guesses: 9 },
    { word: 'frontend', guesses: 8 },
    { word: 'backend', guesses: 8 },
    { word: 'mobile', guesses: 7 },
    { word: 'web', guesses: 5 },
    { word: 'cloud', guesses: 6 },
    { word: 'server', guesses: 7 },
    { word: 'domain', guesses: 6 },
    { word: 'hosting', guesses: 8 },
];

let word, guessedLetters, remainingGuesses;

function start() {
  const randomIndex = Math.floor(Math.random() * wordsAndGuesses.length);
  word = wordsAndGuesses[randomIndex].word;
  remainingGuesses = wordsAndGuesses[randomIndex].guesses;
  guessedLetters = new Set();
  updateWordDisplay();
  updateGuessesDisplay();
}

function guess(letter) {
  if (remainingGuesses > 0 && !guessedLetters.has(letter)) {
    guessedLetters.add(letter);
    if (!word.includes(letter)) {
      remainingGuesses--;
    }
    updateWordDisplay();
    updateGuessesDisplay();
    checkWin();
    checkLoss();
  }
}

function updateWordDisplay() {
  const wordElement = document.getElementById('word');
  let displayWord = '';
  for (const char of word) {
    if (guessedLetters.has(char)) {
      displayWord += char;
    } else {
      displayWord += '_';
    }
    displayWord += ' ';
  }
  wordElement.innerText = displayWord;
}

function updateGuessesDisplay() {
  const guessesElement = document.getElementById('guesses');
  guessesElement.innerText = `Remaining Guesses: ${remainingGuesses}`;
}

function checkWin() {
  const displayWord = document.getElementById('word').innerText.replace(/ /g, '');
  if (displayWord === word) {
    alert('Congratulations! You guessed the word!');
    start();
  }
}

function checkLoss() {
  if (remainingGuesses === 0) {
    alert('You ran out of guesses! The word was: ' + word);
    start();
  }
}