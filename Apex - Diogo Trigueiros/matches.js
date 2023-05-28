const API_KEY = 'b29e7257-3c19-465d-9b44-80189c13866c';

let platform = 'psn';
let platformUserIdentifier = 'Iorde_Ren';
let url = `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}/sessions`;

let xhr = new XMLHttpRequest();
xhr.open('GET', url );
xhr.addEventListener('load', mostrarMatches );
xhr.setRequestHeader('TRN-Api-Key', API_KEY);
xhr.send();

function mostrarMatches() {
    console.log( "dados com o perfil ... ")
    console.log(  JSON.parse(this.responseText) );
  }