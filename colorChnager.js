function changeColor() {
  let body = document.querySelector("body");
  let backGroundColor = body.style.backgroundColor;
  if (backGroundColor === "white") {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "green";
  }
}
