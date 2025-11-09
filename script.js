// Add a smooth scroll effect
document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({
          behavior: "smooth",
        });
    });
  });

function Meow_Meow() {
  // Stop all existing background music
  const allMusic = document.querySelectorAll("audio");
  allMusic.forEach((m) => {
    m.pause();
    m.currentTime = 0;
  });

  // Check if Meow Meow audio already exists
  let music2 = document.getElementById("background-music2");


  // Play the meow song
  music2.volume = 1;
  music2.play().catch(() => {});
}

function RomanticSong() {
  // Stop all existing background music
  const allMusic = document.querySelectorAll("audio");
  allMusic.forEach((m) => {
    m.pause();
    m.currentTime = 0;
  });

  let music3 = document.getElementById("background-music3");
  music3.volume = 1;
  music3.play().catch(() => {});
}
