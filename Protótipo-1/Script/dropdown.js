var drop = document.getElementById("dropdown");
var programacaoContent = document.getElementById("programacao-content");

function entrada() {
    programacaoContent.style.display = "block"
}

function saida() {
    programacaoContent.style.display = "none"
}

function menu(x){
    x.classList.toggle("change");

    const menu = document.getElementById("menu-mobile");
    const blur = document.querySelectorAll(".lamps");

    if (menu.style.display === "flex") {
    menu.style.display = "none";
    for (let i = 0; i < blur.length; i++){
        blur[i].style.filter = "blur(0)";
    }
  } else {
    menu.style.display = "flex";
    for (let i = 0; i < blur.length; i++){
        blur[i].style.filter = "blur(5px)";
    }
  }
}