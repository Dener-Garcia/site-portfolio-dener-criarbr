const HighConstrastSelected = () => {
    const btns = document.querySelectorAll("button");
    const links = document.querySelectorAll("a");

    let highTheme = localStorage.getItem("ui-theme");

    if (highTheme == "high-contrast") {
      addHighLight(links, addClass);
      addHighLight(btns, addClass);
    }else{
        addHighLight(links, removeClass)
        addHighLight(btns, removeClass)
    }

    function addHighLight(element, operation) {
        element.forEach((e) => {
          operation(e.classList);
        });
      }
    
      function addClass(className) {
        className.add("highLight");
      }
    
      function removeClass(className) {
        className.remove("highLight");
      }
}

export default HighConstrastSelected