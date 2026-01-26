// how does work continue in while loop

let n = 0;
while (n < 15) {
  n++;
  if (n % 5) {
    continue
  }
  console.log(n);
}
