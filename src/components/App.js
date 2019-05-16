import "styles/App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

/**
 * Container for the application
 */
export default class App {
  /**
   * Create the App and render it's children
   * @param {HTMLElement} rootElement - The root element for all components
   */
  // constructor(rootElement) {
  //   this._root = rootElement;
  //   this.selectedSideBar = "home";
  //   this.render();
  // }

  constructor(rootElement, selectedSideBar){
    this._root = rootElement;
    this.selectedSideBar = selectedSideBar;
    //const pageContainer = document.createElement("div");
    const pageContainer = document.getElementById("pageId");
    const sidebarContainer = document.getElementById("sideId");
    if(pageContainer !== null)
      this._root.removeChild(pageContainer);
    if(sidebarContainer !== null)
      this._root.removeChild(sidebarContainer);
    this.render();
  }

  /**
   * Render elements to the DOM
   */
  render() {
    this._root.className = "app";

    const sidebarElement = document.createElement("div");
    sidebarElement.id = "sideId";
    const sidebar = new Sidebar();
    sidebarElement.appendChild(sidebar.getElement());

    const pageContainer = document.createElement("div");
    pageContainer.className = "page";
    pageContainer.id = "pageId";

    const header = new Header();
    const content = new Content(this.selectedSideBar);

    pageContainer.appendChild(header.getElement());
    pageContainer.appendChild(content.getElement());

    this._root.appendChild(sidebarElement);
    this._root.appendChild(pageContainer);
  }
}
