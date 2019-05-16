import "styles/IconButton.css";
import App from "./App";
import Sidebar from "./Sidebar";

/**
 * Button containing a [Font Awesome]{@link https://fontawesome.com/} icon
 */
export default class IconButton {
  /**
   * Create an IconButton component
   * @param {string} iconName the font awesome icon name
   */
  constructor(iconName) {
    this._iconName = iconName;
    this._button = document.createElement("button");
    const sidebarElements = new Sidebar();
    
    this._button.onclick = function(iconName){
      if(sidebarElements._sidebarArray.includes(iconName.currentTarget.id)){
        new App(document.getElementById("root"), iconName.currentTarget.id);
      } 
    }
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._button.className = "icon-button";
    this._button.id = this._iconName;
    const icon = document.createElement("i");
    icon.className = `fas fa-${this._iconName} fa-3x`;
    this._button.appendChild(icon);

    return this._button;
  }
}
