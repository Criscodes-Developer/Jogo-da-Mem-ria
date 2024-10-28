const cartas = document.querySelectorAll('.carta');
const texto = document.querySelector('.texto_p');
const virada = document.querySelector('.virada');
let cartaVirada = null;
let cartaAnterior = null;

cartas.forEach((carta) => {
  carta.addEventListener('click', () => {
    if (!carta.classList.contains('virada')) {
      carta.classList.add('virada');
      if (!cartaVirada) {
        cartaVirada = carta;
      } else {
        cartaAnterior = cartaVirada;
        cartaVirada = carta;
        if (cartaAnterior.querySelector('.verso').textContent !== cartaVirada.querySelector('.verso').textContent) {
          setTimeout(() => {
            cartaAnterior.classList.remove('virada');
            cartaVirada.classList.remove('virada');
            cartaVirada = null;
            cartaAnterior = null;
          }, 1000);
        } else {
          cartaAnterior.classList.add('resolvida');
          cartaVirada.classList.add('resolvida');
          cartaVirada = null;
          cartaAnterior = null;
        }
      }
    }
  });
});