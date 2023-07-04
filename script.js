const cores = document.querySelectorAll('.cores ul li');
const corSelecionada = document.querySelector('.cor-selecionada');

function handleSelecionaCor(cor) {
  const data = cor.className;

  corSelecionada.classList.forEach((item) => {
    if (item !== 'cor-selecionada') {
      corSelecionada.classList.remove(item);
    }
  })
  corSelecionada.classList.add(data);
}

cores.forEach((cor) => {
  cor.addEventListener('click', () => {
    handleSelecionaCor(cor);
  });
})