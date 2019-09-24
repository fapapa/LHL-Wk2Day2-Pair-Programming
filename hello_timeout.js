let timer = 0;

const words = [
  "4311o",
  "th3r3",
  "w0r1d"
];

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(words[i]);
  }, timer);

  timer += 1000;
}
