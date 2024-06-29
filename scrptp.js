import {randomizer} from "./js/randomizer.js"
import {colorfunction} from "./js/color.js"
import {hjemfunction} from "./nav/hjem.js"
import {kontaktfunction} from "./nav/kontaktMeg.js"
import {om_Meg} from "./nav/omMeg.js"
import {proFunction} from "./nav/pro.js"
import {updateColor} from "./colormous.js";
// import {functioNProsjekter} from "./navigakjon/prosjekter.js"
// const darkButton = document.getElementById("darkButton")

// darkButton.addEventListener(click,function (){
//     teamSwitch(lightButton,darkButton) 
// })
randomizer();
colorfunction();
hjemfunction();
kontaktfunction();
om_Meg();
proFunction();
updateColor();