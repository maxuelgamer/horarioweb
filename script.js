function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var html = document.getElementsByTagName('html')[0]
    var data = new Date()
    var hora = checkTime(data.getHours())
    var minuto = checkTime(data.getMinutes())
    var segundo = checkTime(data.getSeconds())

    msg.innerHTML = `Agora são: ${hora}:${minuto}:${segundo}`

    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'img/fotomanha.png'
        html.style.background = "linear-gradient(to right, #ffe259, #ffa751)";
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        img.src = 'img/fototarde.png'
        html.style.background = "linear-gradient(to right, #ffe000, #799f0c)";
    } else {
        // Boa Noite
        img.src = 'img/fotonoite.png'
        html.style.background = "linear-gradient(0deg, rgba(8,0,94,1) 0%, rgba(45,47,253,1) 100%)";
    }

}

setInterval(carregar, 1000)