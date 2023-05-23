document.getElementById("myText").addEventListener("input", updateText);
document.getElementById("logo-selection").addEventListener("click", logoSelection);
function updateText() {
  var text = document.getElementById("myText").value;
  var textOverlay = document.getElementById("textOverlay");
  textOverlay.innerHTML = text;
}

let etape = 1;

function fonctionEtape() {
  if (etape === 1) {
    document.querySelector("#étape-txt h3").innerHTML = "Création du motif : dos";
    document.querySelector("#étape-title h2").innerHTML = "Étape 2";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat3").style.display = "none";
    document.querySelector(".img-two-bloc-two.sweat4").style.display = "none";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "none";
    etape = 2;
  }

  else if (etape === 2) {
    document.querySelector("#étape-txt h3").innerHTML = "Création du motif : bras droit";
    document.querySelector("#étape-title h2").innerHTML = "Étape 3";
    document.querySelector(".img-two-bloc-two.sweat3").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "none";
    etape = 3;
  }

  else if (etape === 3) {
    document.querySelector("#étape-txt h3").innerHTML = "Création du motif : bras gauche";
    document.querySelector("#étape-title h2").innerHTML = "Étape 4";
    document.querySelector(".img-two-bloc-two.sweat4").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat3").style.display = "none";
    etape = 4;
  }

  else if (etape === 4) {
    document.querySelector("#étape-txt h3").innerHTML = "Création du texte : face";
    document.querySelector("#étape-title h2").innerHTML = "Étape 5";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat4").style.display = "none";
    document.querySelector(".Bloc-threecontainer").style.display = "none";
    document.querySelector(".Bloc-3-threecontainer").style.display = "flex";
    document.querySelector(".Bloc-4-threecontainer").style.display = "none";
    etape = 5;
  }

  else if (etape === 5) {
      document.querySelector("#étape-txt h3").innerHTML = "Création finale";
      document.querySelector("#étape-title h2").innerHTML = "Étape finale";
      document.querySelector(".img-two-bloc-two.sweat").style.display = "block";
      document.querySelector(".img-two-bloc-two.sweat4").style.display = "none";
      document.querySelector(".Bloc-threecontainer").style.display = "none";
      document.querySelector(".Bloc-3-threecontainer").style.display = "none";
      document.querySelector(".Bloc-4-threecontainer").style.display = "flex";
      etape = 6;
    }

}

function logoSelection(){
  etape = 1;
    document.querySelector("#étape-txt h3").innerHTML = "Création du motif : face";
    document.querySelector("#étape-title h2").innerHTML = "Étape 1";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "none";
    document.querySelector(".img-two-bloc-two.sweat3").style.display = "none";
    document.querySelector(".img-two-bloc-two.sweat4").style.display = "none";
    document.querySelector("#selection-1").style.display = "flex";
    document.querySelector(".Bloc-3-threecontainer").style.display = "none";
  };





/*ÉTAPE 1 */

document.querySelector(".img-row-threecontainer.sweat-motif-1").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape1");
  sweatEtape1.style.background = "url(IMG/motif-face-1.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-2").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape1");
  sweatEtape1.style.background = "url(IMG/motif-face-2.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});
document.querySelector(".img-row-threecontainer.sweat-motif-3").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape1");
  sweatEtape1.style.background = "url(IMG/motif-face-3.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-4").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape1");
  sweatEtape1.style.background = "url(IMG/motif-face-4.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-5").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape1");
  sweatEtape1.style.background = "url(IMG/motif-face-5.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-6").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape1");
  sweatEtape1.style.background = "url(IMG/motif-face-6.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-7").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape1");
  sweatEtape1.style.background = "url(IMG/motif-face-7.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".icon-row-threecontainer").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape1");
  sweatEtape1.style.background = "url(IMG/pull_face-1.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});



/*ÉTAPE 2 */

document.querySelector(".img-row-threecontainer.sweat-motif-1").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape2");
  sweatEtape1.style.background = "url(IMG/motif-dos-1.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-2").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape2");
  sweatEtape1.style.background = "url(IMG/motif-dos-2.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});
document.querySelector(".img-row-threecontainer.sweat-motif-3").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape2");
  sweatEtape1.style.background = "url(IMG/motif-dos-3.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-4").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape2");
  sweatEtape1.style.background = "url(IMG/motif-dos-4.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-5").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape2");
  sweatEtape1.style.background = "url(IMG/motif-dos-5.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-6").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape2");
  sweatEtape1.style.background = "url(IMG/motif-dos-6.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-7").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape2");
  sweatEtape1.style.background = "url(IMG/motif-dos-7.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".icon-row-threecontainer").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape2");
  sweatEtape1.style.background = "url(IMG/pull_dos-2.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});



/*ÉTAPE 3 */


document.querySelector(".img-row-threecontainer.sweat-motif-1").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape3");
  sweatEtape1.style.background = "url(IMG/motif-bd-1.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-2").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape3");
  sweatEtape1.style.background = "url(IMG/motif-bd-2.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});
document.querySelector(".img-row-threecontainer.sweat-motif-3").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape3");
  sweatEtape1.style.background = "url(IMG/motif-bd-3.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-4").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape3");
  sweatEtape1.style.background = "url(IMG/motif-bd-4.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-5").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape3");
  sweatEtape1.style.background = "url(IMG/motif-bd-5.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-6").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape3");
  sweatEtape1.style.background = "url(IMG/motif-bd-6.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-7").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape3");
  sweatEtape1.style.background = "url(IMG/motif-bd-7.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".icon-row-threecontainer").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape3");
  sweatEtape1.style.background = "url(IMG/pull_bd-3.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});




/*ÉTAPE 4 */


document.querySelector(".img-row-threecontainer.sweat-motif-1").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape4");
  sweatEtape1.style.background = "url(IMG/motif-bg-1.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-2").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape4");
  sweatEtape1.style.background = "url(IMG/motif-bg-2.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});
document.querySelector(".img-row-threecontainer.sweat-motif-3").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape4");
  sweatEtape1.style.background = "url(IMG/motif-bg-3.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-4").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape4");
  sweatEtape1.style.background = "url(IMG/motif-bg-4.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-5").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape4");
  sweatEtape1.style.background = "url(IMG/motif-bg-5.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-6").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape4");
  sweatEtape1.style.background = "url(IMG/motif-bg-6.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".img-row-threecontainer.sweat-motif-7").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape4");
  sweatEtape1.style.background = "url(IMG/motif-bg-7.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

document.querySelector(".icon-row-threecontainer").addEventListener("click", () => {
  const sweatEtape1 = document.querySelector("#sweat-etape4");
  sweatEtape1.style.background = "url(IMG/pull_bg-4.png)";
  sweatEtape1.style.backgroundRepeat = "no-repeat";
  sweatEtape1.style.backgroundSize = "contain";
  sweatEtape1.style.backgroundPosition = "center";
});

 
