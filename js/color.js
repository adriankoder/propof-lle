
function colorfunction(moon,sun) {
    const el = document.getElementById("body");
    const randomizerid = document.getElementById("randomizerid")
const darkButton = document.getElementById ("darkButton")
const lightButton = document.getElementById ("lightButton")
const bildeEn = document.querySelector(".bildeEn")
    // el.addEventListener("click", darkLight);

    lightButton.addEventListener("click", light);
function light()
    {
        document.body.style.backgroundColor = "white"
        ManSomKoder.style.display ="block"
        lightCode.style.display ="none"
    }


    darkButton.addEventListener("click", black);
    function black()
        {
            lightCode.style.display ="block"
            ManSomKoder.style.display ="none"
            document.body.style.backgroundColor = "black"
        }
    
    randomizerid.addEventListener("click", rCol);

   
    function rCol() {
        let fargeListe = ["white", "black", "blueviolet"];
        let valgtFarge = fargeListe[Math.floor(Math.random() * fargeListe.length)];
        document.body.style.backgroundColor = valgtFarge;
if (valgtFarge == "white"){
      lightCode.style.display ="none"
       ManSomKoder.style.display ="block"
    
         
    }else if  (valgtFarge == "black"){
      lightCode.style.display ="block"
      ManSomKoder.style.display ="none"
    }

    else{
        lightCode.style.display ="none"
        ManSomKoder.style.display ="block"}


}}
export {colorfunction}
