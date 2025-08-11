

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("click", (e) => {
      e.preventDefault();
      // definir um tempo limite permite que esse hack funcione
      setTimeout(() => (radio.checked = !radio.checked), 0);
    });
  });
  








  