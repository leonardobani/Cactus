function mazzo() {
  const semi = ["cuori", "quadri", "fiori", "picche"];
  const valori = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let mazzo = [];

  // Crea un mazzo di carte
  for (let seme of semi) {
    for (let valore of valori) {
      mazzo.push(`${valore} di ${seme}`);
    }
  }

  // Mescola il mazzo
  for (let i = mazzo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazzo[i], mazzo[j]] = [mazzo[j], mazzo[i]];
  }

  return mazzo;
}

window.onload = function () {
  const mazzoCarte = mazzo();
  const deck = document.getElementById("deck");
  const carte = document.getElementsByClassName("cards");
  

};
