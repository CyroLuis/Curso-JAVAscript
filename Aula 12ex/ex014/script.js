function carregar(){
    var img= window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `Agora São ${hora}:${min}:${seg} horas.`
    if(hora >=0 && hora < 12){
        //Bom dia
        img.src = 'img/imagem 1.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora= 12 && hora < 18){
        //Boa Tarde
        img.src = 'img/imagem 2.jpg'
        document.body.style.background = '#b9846f'
    } else{
        //boa noite
        img.src= 'img/pexels-photo-771883.jpeg'
        document.body.style.background = '#515154'
    }

} 
