function wrongGuessCount(word, guesses) {
  sum = 0;
  guesses.forEach(function(guess) {
    //if (word.indexOf(guess) == -1) {
    //  sum += 1
    //}

    word.indexOf(guess) == -1 ? sum+=1 : sum
  });
  return sum
}

//console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)

function showGuess(word, guesses) {
  return word.split('').map(letter => guesses.includes(letter) ? letter : '_' ).join(' ')
}

//console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
//console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')

function isWinner(word, guesses) {
    return word.split('').join(' ') == showGuess(word, guesses)
}

// console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
// console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))

// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    console.log(showGuess(word,guesses))
    // check if lost
    if (wrongGuessCount(word, guesses) > 6) {
      console.log('You lost!')
    }
    // check if won
    if (isWinner(word, guesses)) {
      console.log('You won!')
    }

    // ask for the next letter
    rl.question('next letter? ', answer => {
        console.log('player wrote:', answer)
        // do something with answer
        next(word, guesses.concat(answer))
    })
}

next('hello',[])
