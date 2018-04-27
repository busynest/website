import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

import "../node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js"

export class BoxBlock extends PolymerElement {

  static get is() { return 'box-block'; }

  static get properties() {
          return {

          };
   }

  constructor() {
  super();
  console.log('box-block was created!');
  }

  static get template() {
    return`

    <style>
      :host {
        
      }
      </style>

    </style><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  		<circle cx="100" cy="100" r="100"/>
    </svg>

  `
  }

}

customElements.define('box-block', BoxBlock);