// // Refactor the logic to remove the repeated setTimeout statements.
let delay = 100;
let array1 = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
for (let i = 0; i < array1.length; i++) {
  setTimeout(() => {
    process.stdout.write(array1[i]);
  }, delay);
  delay += 200;
}
setTimeout(() => console.log('\n'),delay + 1);