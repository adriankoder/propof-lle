// Importerer nødvendige funksjoner fra andre filer
import { randomizer } from "./js/randomizer.js";
import { colorfunction } from "./js/color.js";
import { hjemfunction } from "./nav/hjem.js";
import { kontaktfunction } from "./nav/kontaktMeg.js";
import { om_Meg } from "./nav/omMeg.js";
import { proFunction } from "./nav/pro.js";
import { updateColor } from "./js/colormous.js";

// Legger til en event listener på et element med ID 'imageInput'. Denne lytteren reagerer på 'change' eventet, som skjer når brukeren velger en fil.
document.getElementById("imageInput")
  .addEventListener("change", function (event) {
    // Henter den valgte filen fra input-feltet
    const file = event.target.files[0];
    // Sjekker om det faktisk er valgt en fil
    if (file) {
      // Oppretter en FileReader for å lese filen
      const reader = new FileReader();
      // Definerer hva som skal skje når filen er ferdig lest
      reader.onload = function (e) {
        // Oppretter et nytt Image-objekt
        const img = new Image();
        // Definerer hva som skal skje når bildet er lastet
        img.onload = function () {
          // Finner canvas-elementet og setter dets størrelse til bildets størrelse
          const canvas = document.getElementById("imageCanvas");
          canvas.width = img.width;
          canvas.height = img.height;
          // Henter canvas' 2D-kontekst for tegning
          const ctx = canvas.getContext("2d");
          // Tegner bildet på canvas
          ctx.drawImage(img, 0, 0);

          // Konverterer bildet til gråskala
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            // Beregner gjennomsnittet av RGB-verdiene for å finne gråskala-verdien
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg; // Setter rød verdi
            data[i + 1] = avg; // Setter grønn verdi
            data[i + 2] = avg; // Setter blå verdi
          }
          // Oppdaterer bildet på canvas med den nye gråskala-dataen
          ctx.putImageData(imageData, 0, 0);

          // Viser nedlastingsknappen og forhåndsvisningen av det konverterte bildet
          document.getElementById("downloadBtn").style.display = "inline";
          const previewImage = document.getElementById("previewImage");
          previewImage.src = canvas.toDataURL("image/png");
          previewImage.style.display = "block";
        };
        // Setter bildets kilde til resultatet fra FileReader, som starter lastingen av bildet
        img.src = e.target.result;
      };
      // Starter lesingen av filen som en Data URL
      reader.readAsDataURL(file);
    }
  });

// Legger til en event listener på nedlastingsknappen som lar brukeren laste ned det konverterte bildet
document.getElementById("downloadBtn").addEventListener("click", function () {
  // Finner canvas-elementet og henter bildet som en Data URL
  const canvas = document.getElementById("imageCanvas");
  const image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  // Oppretter et <a>-element for nedlasting
  const link = document.createElement("a");
  link.download = "nytt_bilde.png"; // Setter navnet på filen som skal lastes ned
  link.href = image; // Setter href til bildets URL
  link.click(); // Simulerer et klikk på lenken for å starte nedlastingen
});

// Kaller på importerte funksjoner for å utføre diverse initialiseringer
randomizer();
colorfunction();
hjemfunction();
kontaktfunction();
om_Meg();

proFunction();
updateColor();
// Kommentert ut kode for fremtidig bruk eller tidligere funksjonalitet
// import {functioNProsjekter} from "./navigakjon/prosjekter.js"
// const darkButton = document.getElementById("darkButton")

// darkButton.addEventListener(click,function (){
//     teamSwitch(lightButton,darkButton)
// })
