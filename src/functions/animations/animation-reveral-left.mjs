const ReveralLeft = (elName, offsetValue) => {
    const elReveralLeft = elName;
  
    document.addEventListener("scroll", () => {
      console.log("chamo funcao")
      elReveralLeft.forEach((e) => {
        let screenSize = window.innerHeight;
        let myElements = e.getBoundingClientRect().top;
        let offset = offsetValue;
  
        if (myElements < (screenSize - offset)) {
          e.classList.remove("reveral-left");
        } else {
          e.classList.add("reveral-left");
        }
        //    console.log("ok", screenSize, e.getBoundingClientRect().top)
      });
    });
  };
  
  export default ReveralLeft;