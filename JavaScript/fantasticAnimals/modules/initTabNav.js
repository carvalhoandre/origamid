export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = tabMenu;
    this.tabContent = tabContent;
    this.activeClass = "ativo";
  }

  activeTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass);
    });

    const direction = this.tabContent[index].dataset.anime;

    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((tab, index) =>
      tab.addEventListener("click", () => this.activeTab(index))
    );
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
