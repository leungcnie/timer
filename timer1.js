const args = process.argv.slice(2);
const nums = args.map((str) => Number(str));
let delay = 0;

  if (nums.length !== 0) {
    for (const num of nums) {
      if (Math.sign(num) !== -1 && !isNaN(num)) {
        delay = num * 1000;
        setTimeout(() => {
          console.log("Beep!");
        }, delay);
        console.log(delay);
      }
    }
  }
