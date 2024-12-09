/* Created by Tivotal */

let inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let val = input.value;

    if (isNaN(val)) {
      input.value = "";
      return;
    }

    if (val != "") {
      let next = input.nextElementSibling;
      if (next) {
        next.focus();
      }
    }
  });

  input.addEventListener("keyup", (e) => {
    let key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
      input.value = "";
      let prev = input.previousElementSibling;
      if (prev) {
        prev.focus();
      }
      return;
    }
  });
});
