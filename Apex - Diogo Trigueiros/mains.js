const API_KEY = 'b29e7257-3c19-465d-9b44-80189c13866c';

let platform = 'psn';
let platformUserIdentifier = 'Iorde_Ren';
let url = `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`;

let xhr = new XMLHttpRequest();
xhr.open('GET', url );
xhr.addEventListener('load', mostrarMatches );
xhr.setRequestHeader('TRN-Api-Key', API_KEY);
xhr.send();

function mostrarMatches() {
    console.log( "dados com o perfil ... ")
    console.log(  JSON.parse(this.responseText) );

    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
  
      const lendas = response.data.segments.filter(segment => segment.type === 'legend');
  
      let lendasHtml = "<h2>Legends</h2>";
  
      for (const lenda of lendas) {
        const lendaName = lenda.metadata.name;
        const estatisticas = lenda.stats;
  
        lendasHtml += `<h3>${lendaName}</h3>`;
  
        if (Object.keys(estatisticas).length === 0) {
          lendasHtml += "<p>No stats available for this legend</p>";
        } else {
          for (const key in estatisticas) {
            const statName = estatisticas[key].displayName;
            const statValue = estatisticas[key].displayValue;
  
            lendasHtml += `<p>${statName}: ${statValue}</p>`;
          }
        }
      }
  
      document.getElementById('estatisticasDasLendas').innerHTML = lendasHtml;
    } else {
      console.error('Ocorreu um erro ao buscar os dados do perfil');
    }
}  