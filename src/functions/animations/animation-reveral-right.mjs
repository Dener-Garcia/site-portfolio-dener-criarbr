const ReveralRight = (elName, offsetValue) => {
    const elReveralRight = elName;
  
    document.addEventListener("scroll", () => {
      elReveralRight.forEach((e) => {
        let screenSize = window.innerHeight;
        let myElements = e.getBoundingClientRect().top;
        let offset = offsetValue;
  
        if (myElements < (screenSize - offset)) {
          e.classList.remove("reveral-right");
        } else {
          e.classList.add("reveral-right");
        }
        //    console.log("ok", screenSize, e.getBoundingClientRect().top)
      });
    });
  };
  
  export default ReveralRight;