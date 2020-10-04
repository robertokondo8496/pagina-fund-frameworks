// arquivo com os scripts em javascript

$(document).ready(function(){
    $("button").click(function(){
        var x = $("form").serializeArray();
        var nome = JSON.stringify(x[0].value);
        var sobrenome = JSON.stringify(x[1].value);
        var opcao = JSON.stringify(x[2].value);
        alert(nome + " " + sobrenome + " selecionou a opção " + opcao);
    })
})

function funcaoimagem(){
    alert('Você passou o cursor pela imagem! :(');
}