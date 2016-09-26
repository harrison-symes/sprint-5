//triangle
var log = "#";
for (var i = 1; i <= 7; i++) {
  console.log(log);
  log += "#";
}

//fizzbuzz
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  } else if ( i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i);

}


//chess board
var board = "";
var size = 8;
var bool = false;
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if (j === 0) {  
      if (bool) board += '\n#';
      if (!bool) board += '\n '; 
    } else {
      if (bool) board += '#';
      if (!bool) board += ' '; 
    }
    if (j != size -1) bool = !bool;
  }
}
  console.log(board);

