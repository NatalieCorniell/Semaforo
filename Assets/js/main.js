var semRojo = document.getElementById("Red");
var semAmarillo = document.getElementById("Yellow");
var semVerde = document.getElementById("Green");
var time = document.getElementById("Timer").value;
var steps = document.getElementById("pasos");
var metters = document.getElementById("metros");

function showRed() {
    semRojo.classList.remove("un_available");
    semRojo.classList.add("available");

    semAmarillo.classList.add("un_available");
    semAmarillo.classList.remove("available");

    semVerde.classList.add("un_available");
    semVerde.classList.remove("available");
  };
  function showYellow() {
    semAmarillo.classList.remove("un_available");
    semAmarillo.classList.add("available");

    semRojo.classList.add("un_available");
    semRojo.classList.remove("available");

    semVerde.classList.add("un_available");
    semVerde.classList.remove("available");

  };
  function showGreen() {
    semVerde.classList.remove("un_available");
    semVerde.classList.add("available");

    semRojo.classList.add("un_available");
    semRojo.classList.remove("available");
    
    semAmarillo.classList.add("un_available");
    semAmarillo.classList.remove("available");
  };

  function initTraffic(){
    alert("No Puede Cruzar")
  
    semVerde.classList.remove("un_available");
    semVerde.classList.add("available");

    semRojo.classList.add("un_available");
    semRojo.classList.remove("available");
    
    semAmarillo.classList.add("un_available");
    semAmarillo.classList.remove("available");
    stadistics();
  }
function Cross (){
    alert("Solicitud enviada.")

    Timer()
    setTimeout(() => {showYellow()}, 5000);
    setTimeout(() => {showRed()}, 10000);

}
function Timer(){
   var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    // document.getElementById("Timer").textContent = timeleft;
    document.getElementById("Timer").value = timeleft;
    if(timeleft <= 0)
    {
        initTimeCross()
        clearInterval(downloadTimer);
    }
    },1000);

   
  }

  function initTimeCross() {
    alert("Puede cruzar, Conteo de 10s iniciado.")
    
    document.getElementById("Timer").style = "display: none !important";
    document.getElementById("TimerToCross").style = "display: block !important";
  
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
   
    document.getElementById("TimerToCross").value = timeleft;
    if(timeleft <= 0)
    {
        clearInterval(downloadTimer);
            //Colocar semaforo modo inicial
            initTraffic()
    }
    },1000);
  }

  function stadistics(){
    localStorage.setItem("steps", "0");
    var currentTotal = localStorage.getItem("steps");
    var newTotal = parseInt(currentTotal) + 10;
    localStorage.setItem("steps", newTotal.toString());
    steps.value = newTotal.toString();
    // //
    // localStorage.setItem("metters", "0");
    // var currentTotal = localStorage.getItem("metters");
    // var newTotal = parseInt(currentTotal) + 1;
    // localStorage.setItem("metters", newTotal.toString());
    // metters.value = newTotal.toString();
    //
}
  