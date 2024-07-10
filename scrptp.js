// Importerer nødvendige funksjoner fra andre filer
import { randomizer } from "./js/randomizer.js";
import { colorfunction } from "./js/color.js";
import { handleColorChange } from "./js/colormous.js";
import { hjemfunction } from "./nav/hjem.js";
import { kontaktfunction } from "./nav/kontaktMeg.js";
import { om_Meg } from "./nav/omMeg.js";
import { proFunction } from "./nav/pro.js";
import { bildeRedigering } from "./js/bilderedigering.js";

// Kaller på importerte funksjoner for å utføre diverse initialiseringer
randomizer();
colorfunction();
hjemfunction();
kontaktfunction();
om_Meg();

proFunction();
handleColorChange();
// Kommentert ut kode for fremtidig bruk eller tidligere funksjonalitet
// import {functioNProsjekter} from "./navigakjon/prosjekter.js"
// const darkButton = document.getElementById("darkButton")

// darkButton.addEventListener(click,function (){
//     teamSwitch(lightButton,darkButton)
// })
bildeRedigering();