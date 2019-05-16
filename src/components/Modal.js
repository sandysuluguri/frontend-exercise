import IconButton from "./IconButton";
import "styles/Modal.css";
import data from "../data";
import Content from "./Content";

/**
 * Added to add a new range card
 */
export default class ModalCard {
  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  constructor(){
    //
  };

  getElement() {
    const container = document.createElement("div");
    container.id = "abc";
    const overlayDiv = document.createElement("div");
    overlayDiv.id = "popup";
    
    const formData = document.createElement("form");
    formData.id = "formRadio";

    const formDiv = document.createElement("div");
    formDiv.id="selectItem";
    data.map((item, index) => {
      const input = document.createElement("input");
      input.setAttribute("type","radio");
      input.setAttribute("value",item);
      input.setAttribute("name", "selectedItem");
      input.id = item.title;
      const label = document.createElement('label')
      label.innerText = item.title;

      formData.appendChild(input);
      formData.appendChild(label);
      const breakLine = document.createElement("br");
      formData.appendChild(breakLine);
    });

    const addRange = document.createElement("button");
    addRange.setAttribute("type","button");
    addRange.innerText = "Add Range Card";
    const content = new Content("home");
    
    addRange.onclick = this.div_hide();
  //   function() {
  //   const con = new ModalCard();
    
  //     var val = con.getRadioVal(formData, "selectedItem");
  //     content.addElementsToArray(val);
  //     content.getElement();
  //     container.style.display = "none";
  //  };
  
  formData.appendChild(addRange);
  overlayDiv.appendChild(formData);
    container.appendChild(overlayDiv);
    return container;
  }
  
    //Function to Hide Popup
    div_hide(){
      const content = new Content();
      content.addElementsToArray();
      content.getElement();
      document.getElementById('abc').style.display = "none";
    }
 }

