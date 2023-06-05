
const API_KEY = 'b29e7257-3c19-465d-9b44-80189c13866c';

let platform = 'psn';
let platformUserIdentifier = 'Iorde_Ren';
let url = `https://public-api.tracker.gg/v2/apex/standard/search`;

let xhr = new XMLHttpRequest();
xhr.open('GET', url );
xhr.addEventListener('load', searchPlayer);
xhr.setRequestHeader('TRN-Api-Key', API_KEY);
xhr.send();

/*function searchPlayer() {
    console.log("dados com o perfil ... ")
    console.log( JSON.parse(this.responseText));
}*/

function searchPlayer() {
    if (xhr.status === 200) {
        console.log("Dados com o perfil ...");
        try {
            const resposta = JSON.parse(xhr.responseText);
            console.log(resposta);
        } catch (erro) {
            console.error("Erro ao converter JSON:", erro);
        }
    } else {
        console.error("O pedido falhou com o seguinte status:", xhr.status);
    }
}
