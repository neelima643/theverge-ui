const navclose1 = () => {
  const navid1 = document.getElementById("navid1");
  if (navid1.style.display === "none") {
    navid1.style.display = "block";
    navid2.style.display = "none";
    navid3.style.display = "none";
    body.style.overflow = "hidden";
    navid1.style.display = "block";
    navid1.style.overflowY = "scroll";
  } else {
    navid1.style.display = "none";
    body.style.overflowY = "scroll";
  }
};

const navclose2 = () => {
  const navid2 = document.getElementById("navid2");
  if (navid2.style.display === "none") {
    navid2.style.display = "block";
    navid1.style.display = "none";
    navid3.style.display = "none";
    body.style.overflow = "hidden";
  } else {
    navid2.style.display = "none";
    body.style.overflowY = "scroll";
  }
};

const navclose3 = () => {
  const navid3 = document.getElementById("navid3");
  if (navid3.style.display === "none") {
    navid3.style.display = "block";
    navid2.style.display = "none";
    navid1.style.display = "none";
    body.style.overflow = "hidden";
  } else {
    navid3.style.display = "none";
    body.style.overflowY = "scroll";
  }
};
