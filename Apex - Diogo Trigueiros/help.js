document.addEventListener('DOMContentLoaded', () => {
    const linhaPergunta = document.querySelectorAll('.perguntas');
  
    linhaPergunta.forEach((row) => {
      row.addEventListener('click', () => {
        const linhaResposta = row.nextElementSibling;
  
        if (linhaResposta.style.display === 'none' || linhaResposta.style.display === '') {
          linhaResposta.style.display = 'table-row';
        } else {
          linhaResposta.style.display = 'none';
        }
      });
    });
});
  
  