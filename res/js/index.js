//variaveis que estão no escopo do script
let outro = ['a','b'];
let param1 = "aaaaa";

//aqui precisa receber uma função anonima
$("#btn_teste_1").on("click", function(){
    let param2 = "bbbbb";//escopo local
    alert('teste botão 1 '+param1+ " " + param2);
});

$("#btn_teste_2").on("click", outro, 
    function(){
        console.log("botao 2...");
        alert("Valor da variável: "+outro);
    }
);

function alerta(){
    alert('teste!');
}

