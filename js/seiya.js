
//Persanagem Saiya 
function escolhaSaiygaFase(num,respostaCerta) {
    var pagina = num + 1;
    var tentativas = 0;
    var resposta = window.prompt("Selecione a resposta!");

    while(resposta != respostaCerta){
        if (tentativas <= 0){
            tentativas += 1;
            alert(" Resposta errada. tentativa " + tentativas.toString() )
            resposta = window.prompt("Selecione uma resposta")
        } else {
            alert("Lamentamos vc perdeu o Jogo! ")
            window.location.href = "../../Personagens_CDZ/Seiya/gameOver.html";
        }
    }
    if (pagina == 4){
        return window.location.href = "../../Personagens_CDZ/Seiya/fimDeJogo.html";
    }
    return  window.location.href = "saiyaFase" + pagina + ".html";
}