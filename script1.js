let hasard = 0;
let i, compteur = 0;

for (i = 0; i < 1000; i++) {
  hasard = Math.trunc(100 * Math.random());

  if (hasard === 99) {
    compteur++;
    console.log("i=", i, " (", compteur, ")");
  }

}
