function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora} horas.  `

    if (hora >= 0 && hora < 12) {
        //bom dia 
        img.src = 'img-condicoes/img-manha.webp'
        window.document.body.style.background = '#807960'
    } else {
    if (hora >= 12 && hora <= 18) {
        //boa tarde 
        img.src = 'img-condicoes/img-tarde.webp'
        window.document.body.style.background = '#90dcef'
    }  else {
        //boa noite
        img.src = 'img-condicoes/img-noite.webp'
        window.document.body.style.background = '#6c3e57'
    }  
    }  //Fim dos IF ELSE

    }