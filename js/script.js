    var data_final = new Date("November 20, 2021 23:00:00").getTime();
    var horas, minutos, segundos;
    var regressiva = document.getElementById("regressiva");
    
    setInterval(function () {
    
        var data_hoje = new Date().getTime();
        var segundos_f = (data_final - data_hoje) / 1000;
       
        horas = parseInt(segundos_f / 3600);
        segundos_f = segundos_f % 3600;
        
        minutos = parseInt(segundos_f / 60);
        segundos = parseInt(segundos_f % 60);
    
        document.getElementById('hora').innerHTML = horas;
        document.getElementById('minuto').innerHTML = minutos;
        document.getElementById('segundo').innerHTML = segundos;
      
    }, 1000);