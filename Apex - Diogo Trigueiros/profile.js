// Perfil

// Experimentar uma chamada à API

const API_KEY = 'b29e7257-3c19-465d-9b44-80189c13866c';

let platform = 'psn';
let platformUserIdentifier = 'Iorde_Ren';
let url = `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`;

let xhr = new XMLHttpRequest();
xhr.open('GET', url );
xhr.addEventListener('load', mostrarProfile );
xhr.setRequestHeader('TRN-Api-Key', API_KEY);
xhr.send();

function mostrarProfile() {

  console.log( "dados com o perfil ... ")
  console.log(  JSON.parse(this.responseText) );

  const response = JSON.parse(this.responseText);
  const jogador = response.data.platformInfo;
  const lendaAtiva = response.data.segments.find(segment => segment.type === 'legend' && segment.attributes.id === 'legend_3');
  const estitisticasGerais = response.data.segments.find(segment => segment.type === 'overview');

  document.getElementById('jogador').textContent = 'Player Name: ' + jogador.platformUserHandle;
  document.getElementById('plataforma').textContent = 'Platform: ' + jogador.platformSlug;
  document.getElementById('lenda').textContent = 'Active Legend: ' + lendaAtiva.metadata.name;

  const legendStats = document.getElementById('estatisticasDaLenda');
  legendStats.innerHTML = '';
  for (const stat in lendaAtiva.stats) {
    const li = document.createElement('li');
    li.textContent = lendaAtiva.stats[stat].displayName + ': ' + lendaAtiva.stats[stat].displayValue;
    li.classList.add('Perfil'); 
    legendStats.appendChild(li);
  }

  const estitisticasGeraisElement = document.getElementById('estatisticasGerais');
  estitisticasGeraisElement.innerHTML = '';
  for (const stat in estitisticasGerais.stats) {
    const li = document.createElement('li');
    li.textContent = stat + ': ' + estitisticasGerais.stats[stat].displayValue;
    li.classList.add('Perfil'); 
    estitisticasGeraisElement.appendChild(li);
  }
}

