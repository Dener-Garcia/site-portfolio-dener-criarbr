const ReveralLeft = (elName) => {
    const elReveralLeft = elName;
  
    document.addEventListener("scroll", () => {
      elReveralLeft.forEach((e) => {
        let screenSize = window.innerHeight;
        let myElements = e.getBoundingClientRect().top;
        let offset = -100;
  
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