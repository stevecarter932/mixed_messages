/*
The aim of this project is to produce a random sentence based on the horoscope.  3 pieces of data will be randomly generated each time the program is run and will output something like:
- Your sign is 'sun'.
- You are 'having good luck'. 
- Just a thought - inspirational text.
*/

// Arrays contain the text that will be picked at random each time the code is run
const signArray = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
const areArray = ['having good luck', 'having bad luck', 'having mediocre luck'];
const thoughtArray = [
  'Einstein said "I have no special talents. I am only passionately curious."',
  'Roy T. Bennett said "Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart."',
  'Roy T. Bennett said "Instead of worrying about what you cannot control, shift your energy to what you can create."',
  'Roy T. Bennett said "Take responsibility of your own happiness, never put it in other people\'s hands."',
  'Roy T. Bennett said "Be the reason someone smiles. Be the reason someone feels loved and believes in the goodness in people."',
];

// Return a random phrase based on the passed in array
  let randomPhrase = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Pick the random phrases and console.log results
const signText = randomPhrase(signArray);
const areText = randomPhrase(areArray);
const thoughtText = randomPhrase(thoughtArray);
console.log(`\nYour sign is ${signText}.\nYou are ${areText}.\nJust a thought - ${thoughtText}.\n`);
