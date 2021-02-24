function sendForm() {
    var partido = document.getElementById("partido").value
    var orientacion = document.getElementById("orientacion").value
    var votos = document.getElementById("votos").value

    if (votos>50){
        var estado = ("+"+votos);  
    } else if (votos<50){
        var estado = ("-"+votos);
    } else if (votos=50){
        var estado = ("="+votos);
    }

    document.getElementById("tabla").insertRow(-1).innerHTML = '<tr><td>'+partido+'</td><td>'+orientacion+'</td><td>'+votos+'</td><td>'+estado+'</td></tr>';
}

function sendWinner(){

    // var table = document.getElementById("tabla")
    // var rows = table.rows[i].getElementsByTagName('cantidad')

    // for (var i = 1; i < table.rows.length; i++){
    //     if table.rows[i]
    // }


}