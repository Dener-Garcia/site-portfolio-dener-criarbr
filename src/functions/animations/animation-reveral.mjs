const ReveralUp = (elName) => {
  const elReveralUp = elName;

  document.addEventListener("scroll", () => {
    elReveralUp.forEach((e) => {
      let screenSize = window.innerHeight;
      let myElements = e.getBoundingClientRect().top;
      let offset = -100;

      if (myElements < (screenSize - offset)) {
        e.classList.remove("reveral-up");
      } else {
        e.classList.add("reveral-up");
      }
      //    console.log("ok", screenSize, e.getBoundingClientRect().top)
    });
  });
};

export default ReveralUp;
