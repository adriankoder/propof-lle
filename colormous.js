function updateColor() {
document.getElementById('colorRange').addEventListener('input', function() {
  var hue = this.value; // Får verdien av slideren, som representerer fargetonen (hue).
  var lightness = 50; // Standard lysstyrkeverdi.
  
  // Endrer bakgrunnsfargen på boksen basert på sliderens verdi.
  // Bruker HSL-fargeformatet for enkel manipulasjon av fargetone og lysstyrke.
  document.getElementById("colorRange").style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
})};
export { updateColor };
