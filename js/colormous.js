

// Funksjon for å hente og håndtere fargen på colorCircle
function handleColorChange() {

// Få tak i elementet
const colorCircle = document.getElementById("colorCircle");
// Funksjon for å håndtere musebevegelse eller klikk
function handleMouseMove(event) {
  const color = document.getElementById("color");

  const rect = colorCircle.getBoundingClientRect();
  const x = event.clientX - rect.left; // X-posisjon innenfor elementet
  const y = event.clientY - rect.top; // Y-posisjon innenfor elementet
  
  // Beregn vinkelen fra senteret av sirkelen til musepekeren
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const angle = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI + 90; // Konverter til grader og juster så 0 grader er på toppen
  
  // Estimér fargen basert på vinkelen
  // Denne delen er forenklet og må tilpasses basert på hvordan du vil at fargeestimeringen skal fungere
  const colors = ['orange', 'yellow', 'lime', 'aqua', 'blue', 'magenta', 'red'];
  const colorIndex = Math.floor(((angle + 360) % 360) / (360 / colors.length));
  const rgb = colors[colorIndex];
  
    imageCanvas.style.backgroundColor = rgb;


  console.log(`Estimert farge: ${color}`);
}



// Legg til event listener
colorCircle.addEventListener('mousemove', handleMouseMove);


};


// Husk å endre 'click' til den faktiske hendelsen som endrer fargen på colorCircle
export { handleColorChange };
