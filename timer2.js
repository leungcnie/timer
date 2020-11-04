const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  } else if (Number(key) >= 1 && Number(key) <=9) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log("Beep!");
    }, Number(key) * 1000);
  } else if (key === "b") {
    console.log("Beep!");
  }
});

