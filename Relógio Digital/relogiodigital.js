function mostrarHora(){
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var periodo = "AM"
    
    if (hora == 0){
        hora = 12;
    }

    if (hora > 12){
        hora = hora - 12;
        periodo = "PM"
    }

    hora = (hora < 10) ? "0" + hora : hora;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    var horas = hora + ":" + minutos + ":" + segundos + " " + periodo;
    document.getElementById("DisplayClock").innerText = horas;
    document.getElementById("DisplayClock").textContent = horas;

    setTimeout(mostrarHora, 1000);

}

mostrarHora()