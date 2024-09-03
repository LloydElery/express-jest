// Här säger vi EXAKT vad vi vill ha för typer av värden i vår array.
let namesAndNumbersArray: [number, number, string, string];

// Här använder vi vår tuple på två sätt
namesAndNumbersArray = [1, 2, 'Chas', 'Academy'];
let [first, second, thing, otherThing] = namesAndNumbersArray;
