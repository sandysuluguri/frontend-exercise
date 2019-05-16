import IconButton from "./IconButton";
import "styles/AddRangeCard.css";
import Modal from "./Modal";

/**
 * Button used to add a RangeCard component
 */
export default class AddRangeCard {
  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    const container = document.createElement("div");
    container.className = "add-range";

    const addButton = new IconButton("plus-circle");

    container.appendChild(addButton.getElement());
    const modal = new Modal();
    container.onclick = function() {
      container.appendChild(modal.getElement());
    };
    return container;
  }
}
