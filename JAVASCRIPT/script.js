$('button').click(function (){

    let item = $('input').val()
    
    if (item !== ""){
    let Divitem = '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">' + item +'</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>'

    $('#itens').append(Divitem)

    $('input').val('')
    } else return

})



$('#itens').on('click', '.marcarComoComprado', (function(){

    $(this).closest('.item').find('p').toggleClass('textoRiscado')

}))


$('#itens').on('click', '.apagarItem', (function(){
    
    $(this).closest('.item').css('display', 'none')

}))

