export default () => {
  const pageBody = document.querySelector(`body`);
  window.addEventListener(`load`, () => {
    pageBody.classList.add(`loaded`);
  });
};
