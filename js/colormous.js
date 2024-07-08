function updateColor() {
  const element = document.getElementById("color");
  let isDragging = false; // Markerer om brukeren er i ferd med å dra

  element.addEventListener("mousedown", function (e) {
    isDragging = true; // Start dra-handlingen
    updateElementColor(e, this); // Oppdater fargen umiddelbart ved mousedown
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      updateElementColor(e, element); // Oppdater fargen mens du drar
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false; // Avslutt dra-handlingen
  });
}

function updateElementColor(e, colorfulBox) {
  const box = colorfulBox.getBoundingClientRect();
  const y = e.clientX - box.left;
  const x = e.clientY - box.top;
  const hue = (y / box.height) * 360;
  const lightness = 100 - (x / box.width) * 50;
  colorfulBox.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
}

export { updateColor };
