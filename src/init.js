export default () => {
  const createButton = document.querySelector("#createButton");
  createButton.addEventListener("click", () => {
    const modalWindow = document.querySelector("#modal");
    modalWindow.classList.add("show");
    modalWindow.style = {
      display: "block",
    };
    console.log(modalWindow);
  });
};
