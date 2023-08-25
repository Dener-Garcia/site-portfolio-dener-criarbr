const ShowMenu = () => {
  const btnShowMobile = document.querySelector(".show-menu-mobile");

  btnShowMobile.addEventListener("click", () => {
    const menuMobile = document.querySelector(".menu-mobile");
    menuMobile.classList.toggle("menuMobileActive");
    btnShowMobile.classList.toggle("btnMobilePressed");

    const linksMobile = document.querySelectorAll(".menu-mobile nav a");

    linksMobile.forEach((e) => {
      e.addEventListener("click", () => {
        menuMobile.classList.remove("menuMobileActive");
        btnShowMobile.classList.remove("btnMobilePressed");
      });
    });
  });
};

export default ShowMenu;
