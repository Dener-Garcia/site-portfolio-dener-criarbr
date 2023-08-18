const StoreLinkName = () => {
  const gridProjects = document.querySelector(".grid-projects");

  gridProjects.addEventListener("pointerover", () => {
    const nameProjectLink = document.querySelectorAll(".card-project a");

    nameProjectLink.forEach((e) => {
      let name = e.getAttribute("data");
      e.addEventListener("click", () => {
        localStorage.setItem("name-link", name);
      });
    });
  });
};
export default StoreLinkName;
