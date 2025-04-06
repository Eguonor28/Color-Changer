function changeColor() {
  let body = document.querySelector("body");
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "blue";
  } else if (body.style.backgroundColor === "blue") {
    body.style.backgroundColor = "green";
  } else if (body.style.backgroundColor === "green") {
    body.style.backgroundColor = "pink";
  } else if (body.style.backgroundColor === "pink") {
    body.style.backgroundColor = "yellow";
  } else {
    body.style.backgroundColor = "white";
  }
}
