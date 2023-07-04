const cores = document.querySelectorAll('.cores ul li');
const corSelecionada = document.querySelector('.cor-selecionada');

// function handleSelecionaCor(cor) {
//   const data = cor.className;

//   corSelecionada.classList.forEach((item) => {
//     if (item !== 'cor-selecionada') {
//       corSelecionada.classList.remove(item);
//     }
//   })
//   corSelecionada.classList.add(data);
// }

// cores.forEach((cor) => {
//   cor.addEventListener('click', () => {
//     handleSelecionaCor(cor);
//   });
// });

// function handleSelecionaCor({ currentTarget }) {
//   corSelecionada.className = 'cor-selecionada';
//   corSelecionada.classList.add(currentTarget.classList);
//   console.log(corSelecionada, currentTarget)
// }

// cores.forEach((cor) => {
//   cor.addEventListener('click', handleSelecionaCor);
// });

function handleSelecionaCor({ currentTarget }) {

  corSelecionada.className = `cor-selecionada ${currentTarget.className}`;
}

cores.forEach((cor) => {
  cor.addEventListener('click', handleSelecionaCor);
});