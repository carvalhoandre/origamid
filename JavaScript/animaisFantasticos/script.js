const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });

    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((tab, index) =>
    tab.addEventListener("click", () => activeTab(index))
  );
}
