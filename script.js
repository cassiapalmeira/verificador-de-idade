function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resposta = document.querySelector('div#resposta')

    if (fano.value == 0 || fano.value > ano || fano.value <= 1910) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'

            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade <= 21) {
                // adolescente/jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade <= 45) {
                // adulto
                img.setAttribute('src', 'adulto-m.png')
            } else if (idade <= 65) {
                // meia idade
                img.setAttribute('src', 'meia-idade-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-m.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade <= 21) {
                // adolescente/jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade <= 45) {
                // adulta
                img.setAttribute('src', 'adulto-f.png')
            } else if (idade <= 65) {
                // meia idade
                img.setAttribute('src', 'meia-idade-f.png')
            } else {
                // idosa
                img.setAttribute('src', 'idoso-f.png')
            }
        }

        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resposta.appendChild(img)
    }
}