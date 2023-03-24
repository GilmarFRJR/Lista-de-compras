$('button').on('click',(function (){

    let item = $('input').val()
    
    if (item !== ""){
    let Divitem = '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">' + item +'</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>'

    $('#itens').append(Divitem)

    $('input').val('')
    } else return

}))



$('#itens').on('click', '.marcarComoComprado', (function(){

    $(this).closest('.item').find('p').toggleClass('textoRiscado')

}))


$('#itens').on('click', '.apagarItem', (function(){
    
    $(this).closest('.item').remove()

}))


let almoco = '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">Arroz</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' +
              '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">Feijão</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' +
              '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">300g carne moída</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' +
              '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">6 batatas</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' +
              '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">suco de laranja</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>'


let festa = '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">3 pacotes de salgadinho</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' +
             '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">2 pacotes de pirulito</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' + 
             '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">4 refrigerantes</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>'
 


let remedios = '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">remédio para dor de cabeça</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' +
             '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">remédio para febre</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' + 
             '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">xarope</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' +
             '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">band-aid</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>' +
             '<div class="item"><span class="iconLista"><img src="./IMG/iconLista.png"></span><p class="primeiraLetraItem ">colírio</p><span class="apagarItem">X</span><spam class="marcarComoComprado"><img src="./IMG/correto.png"></spam></div>'


$('#botaoListasProntas1').on('click', function(){

    if($('#itens').is(':empty')){

       $('#itens').append(almoco)
    } else{
        alert('Esvazie sua lista primeiro')
    }
})


$('#botaoListasProntas2').on('click', function(){

    if($('#itens').is(':empty')){

       $('#itens').append(festa)
    } else{
        alert('Esvazie sua lista primeiro')
    }
})


$('#botaoListasProntas3').on('click', function(){

    if($('#itens').is(':empty')){

       $('#itens').append(remedios)
    } else{
        alert('Esvazie sua lista primeiro')
    }
})