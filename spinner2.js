
let delay = 100;
let spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ' ]

for(const r of spinner) {
  setTimeout(() => {
      process.stdout.write(r);
}, delay);
delay +=200
}


