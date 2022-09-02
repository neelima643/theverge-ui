const { brotliDecompressSync } = require("zlib");

function navdisplay() {
  body.style.overflow = "hidden";
}

function navclose() {
  for (i = 0; i < 3; i++) {
    const navdivid = document.getElementsByClassName("navdiv")[i];
    if (navdivid.style.display === "none") {
      navdivid.style.display = "block";
    } else {
      navdivid.style.display = "none";
    }
  }
}
